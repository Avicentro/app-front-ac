import { FC, useState } from "react";

// Components
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { SignInWrapper } from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logoExample from "../../static/img/logo-example.png";

// helpers
import { ROUTES } from "../../constants/routes";
import { formConfig } from "./formConfig/formConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/form/Button/Button";
import { sizeButtonEnum } from "../../models";
import { useSignInMutation } from "../../hook/useSignIn";

interface SignInProps {}

const SignIn: FC<SignInProps> = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createUserMutation = useSignInMutation();

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  const createUser = async (data: any) => {
    setLoading(true);
    try {
      await createUserMutation.mutateAsync(data);
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInWrapper>
      <section className="brand-container">
        <img src={logoExample} alt="logo-enterprise" width={92} height={92} />
        <h1 className="name">Appname</h1>
      </section>
      <section className="form-container">
        <form onSubmit={handleSubmit(createUser)}>
          <h3 className="title">Iniciar Sesión</h3>
          <DynamicForm
            formConfig={formConfig}
            errors={errors}
            setValue={setValue}
            control={control}
          />
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
    </SignInWrapper>
  );
};

export default SignIn;
