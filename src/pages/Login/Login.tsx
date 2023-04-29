import { FC, useEffect, useState } from "react";

// Components
import Button from "../../components/form/Button/Button";
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";
import ToggleButton from "../../components/form/ToggleButton/ToggleButton";

// Styles
import { LoginWrapper } from "./styles";
import logoExample from "../../static/img/logo-example.png";

// helpers
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { formConfig } from "./fotmConfig/formConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Redux
import { useDispatch } from "react-redux";
import { updateLoginData } from "../../store/loginData/actions";
import { sizeButtonEnum } from "../../models";
import { useLoginMutation } from "../../hook/useLogin";
import { loginDataType } from "./models";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [loading, setLoading] = useState(false);
  const [needRememberUser, setNeedRememberUser] = useState(false);

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

  const setRememberUser = (isActive: boolean) => {
    setNeedRememberUser(isActive);
  };

  const saveUserInLocalStorage = (loginData: loginDataType) => {
    if (needRememberUser) {
      localStorage.setItem("loginData", JSON.stringify(loginData));
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
      saveUserInLocalStorage(loginData);
      saveUserInRedux(loginData);
      navigate(ROUTES.PROGRAMMING);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper>
      <section className="brand-container">
        <img src={logoExample} alt="logo-enterprise" width={92} height={92} />
        <h1 className="name">Appname</h1>
      </section>
      <section className="form-container">
        <form onSubmit={handleSubmit(loginUser)}>
          <h3 className="title">Iniciar Sesión</h3>
          <DynamicForm
            formConfig={formConfig}
            errors={errors}
            setValue={setValue}
            control={control}
          />
          <div className="remember-user">
            <p>Recordar usuario</p>
            <ToggleButton
              isActive={false}
              handleChange={(rememberUser) => setRememberUser(rememberUser)}
            />
          </div>
          <Button
            type="submit"
            mb={28}
            sizeButton={sizeButtonEnum.extraBig}
            loading={loading}
          >
            Iniciar sesión {"->"}
          </Button>
          <p className="question">¿Aún no tienes cuenta?</p>
          <a className="create-account" href="/">
            Crear cuenta
          </a>
        </form>
      </section>
    </LoginWrapper>
  );
};

export default Login;
