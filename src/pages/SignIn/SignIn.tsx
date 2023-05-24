import { FC, useState } from "react";

// Components
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { useForm } from "react-hook-form";

// helpers
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/form/Button/Button";
import { sizeButtonEnum } from "../../models";
import { useSignInMutation } from "../../hook/useSignIn";
import { formConfig } from "./formConfig/formConfig";
import { SignInWrapper } from "./styles";
import BackButton from "../../components/display/BackButton/BackButton";

interface SignInProps {}

const SignIn: FC<SignInProps> = () => {
  const [loading, setLoading] = useState(false);

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
      await createUserMutation.mutateAsync({ ...data, user: data.email });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInWrapper>
      <BackButton />
      <section className="form-container">
        <form onSubmit={handleSubmit(createUser)}>
          <h3 className="title">Crear Nueva Cuenta</h3>
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
            Crear cuenta {"->"}
          </Button>
        </form>
      </section>
    </SignInWrapper>
  );
};

export default SignIn;
