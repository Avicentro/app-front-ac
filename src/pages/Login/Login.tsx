import { FC, useState } from "react";

// Components
import Button from "../../components/form/Button/Button";
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";
import ToggleButton from "../../components/form/ToggleButton/ToggleButton";

// Styles
import { LoginWrapper } from "./styles";
import logoExample from "../../static/img/logo-example.png";

// helpers
import { useForm } from "react-hook-form";
import { formConfig } from "./fotmConfig/formConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [needRememberUser, setNeedRememberUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
    watch,
    getValues,
  } = useForm({
    resolver: yupResolver(createSchemaByConfig(formConfig)),
    defaultValues: getDefaultValuesByConfig(formConfig),
  });

  const setRememberUser = (isActive: boolean) => {
    console.log("isActive", isActive);
    setNeedRememberUser(isActive);
  };

  const loginUser = (data: any) => {
    setLoading(true);
    try {
      if (needRememberUser)
        localStorage.setItem("loginData", JSON.stringify(data));
      setTimeout(() => {
        console.log(data);
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
            register={register}
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
