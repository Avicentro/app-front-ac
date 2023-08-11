import { FC, useEffect, useState } from "react";

// Components
import Button from "../../components/form/Button/Button";
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";

// Styles
import { BrandImage } from "./styles";
import logoPrometeo from "../../static/img/prometeo_brand_red.svg";
import RightArrow from "../../static/vectors/right-arrow-svgrepo-com.svg";

// helpers
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { formConfig } from "./formConfig/formConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Redux
import { useDispatch } from "react-redux";
import { updateLoginData } from "../../store/loginData/actions";
import { sizeButtonEnum } from "../../models";
import { useLoginMutation } from "../../hook/useLogin";
import { loginDataType } from "./models";
import { showToast } from "../../store/toast/actions";
import { Title } from "../../components/genericStyles";
import LayoutAuth from "../../layoutAuth/LayoutAuth";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [loading, setLoading] = useState(false);
  const [needRememberUser] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData") || "{}");
    if (loginData?.access_token) {
      dispatch(updateLoginData(loginData));
      return navigate(ROUTES.PROGRAMMING);
    }
  }, [navigate, dispatch]);

  const decodedToken = (token: string) => {
    const [, payloadEncoded] = token.split(".");
    const payloadDecoded = JSON.parse(atob(payloadEncoded));
    return payloadDecoded;
  };

  const saveUserInLocalStorage = (loginData: loginDataType) => {
    if (needRememberUser) {
      localStorage.setItem(
        "loginData",
        JSON.stringify({
          ...loginData,
          ...decodedToken(loginData.access_token),
        })
      );
    }
    localStorage.setItem("access_token", loginData.access_token);
  };

  const saveUserInRedux = (loginData: loginDataType) => {
    dispatch(updateLoginData(loginData));
  };

  const loginUser = async (data: any) => {
    setLoading(true);
    try {
      const loginData = await loginMutation.mutateAsync(data);
      const now = new Date();
      const tokenExpired = loginData.expiresIn.slice(0, 2);
      now.setHours(now.getHours() + Number(tokenExpired));
      saveUserInLocalStorage({ ...loginData, tokenExpired: now });
      saveUserInRedux(loginData);
      window.location.reload();
    } catch (error: any) {
      dispatch(showToast(error?.response?.data?.message, "error"));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAuth>
        <div className="brand-container">
          <BrandImage className="brand-name" src={logoPrometeo} alt="prometeo" />
        </div>
        <form onSubmit={handleSubmit(loginUser)}>
          <Title>Iniciar Sesión</Title>
          <DynamicForm
            formConfig={formConfig}
            errors={errors}
            setValue={setValue}
            control={control}
          />
          <div className="sign-in-btn">
          <Button
            type="submit"
            mb={8}
            sizeButton={sizeButtonEnum.medium}
            loading={loading}
          >
            <div className="gap">
              Iniciar sesión
              <img
                className="right-arrow"
                src={RightArrow}
                alt="flecha derecha"
                width={15}
              />
            </div>
          </Button>
          </div>
        </form>
        <span
          className="forgot-password"
          onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
        >
          Olvide mi contraseña
        </span>
    </LayoutAuth>
  );
};

export default Login;
