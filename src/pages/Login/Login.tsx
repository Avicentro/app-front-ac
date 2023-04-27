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
import { useLoginMutation } from "../../hook/useLogin";



interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const loginMutation = useLoginMutation();

  const handleLogin = async (data: any) => {
    await loginMutation.mutateAsync(data);
  };

  const [needRememberUser, setNeedRememberUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchemaByConfig(formConfig)),
    defaultValues: getDefaultValuesByConfig(formConfig),
  });

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData") || "{}");
    if (loginData?.isAuthenticated) {
      dispatch(updateLoginData(loginData));
      return navigate(ROUTES.PROGRAMMING);
    }
  }, [navigate, dispatch]);

  const setRememberUser = (isActive: boolean) => {
    setNeedRememberUser(isActive);
  };

  const loginUser = (data: any) => {
    handleLogin(data);
    setLoading(true);
    try {
      const loginData = {
        isAuthenticated: true,
        data,
      };
      if (needRememberUser)
        localStorage.setItem("loginData", JSON.stringify(loginData));
      setTimeout(() => {
        dispatch(updateLoginData(loginData));
        navigate(ROUTES.PROGRAMMING);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
    // finally {
    //   setLoading(false);
    // }
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
          <Button type="submit" mb={28} loading={loading}>
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
