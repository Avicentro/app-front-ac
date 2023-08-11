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
import { useDispatch } from "react-redux";
import { showToast } from "../../store/toast/actions";
import Card from "../../components/display/Card/Card";
import { Title } from "../../components/genericStyles";

interface SignInProps {}

const SignIn: FC<SignInProps> = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
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
    const newUser: any = {
      name: `${data.names} ${data.surnames}`,
      email: data.email,
      password: data.password,
      role: data.role,
    }
    setLoading(true);
    try {
      await createUserMutation.mutateAsync(newUser);
      dispatch(showToast("El usuario ha sido creado exitosamente", "success"));
    } catch (error: any) {
      console.error(error);
      dispatch(showToast(error.response.data.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInWrapper>
      <BackButton />
      <section className="form-container">
        <Card customClass="card-new-account">
          <form onSubmit={handleSubmit(createUser)}>
            <Title>Crear Nueva Cuenta</Title>
            <DynamicForm
              formConfig={formConfig}
              errors={errors}
              setValue={setValue}
              control={control}
            />
            <Button
              type="submit"
              mb={28}
              sizeButton={sizeButtonEnum.big}
              loading={loading}
            >
              Crear cuenta
            </Button>
          </form>
        </Card>
      </section>
    </SignInWrapper>
  );
};

export default SignIn;
