import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/form/Button/Button";
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { ROUTES } from "../../constants/routes";
import { useForgotPasswordMutation } from "../../hook/useLogin";
import { sizeButtonEnum } from "../../models";
import { showToast } from "../../store/toast/actions";
import { formConfig } from "./formConfig/formConfig";

// Components

// Styles

import { ForgotPasswordWrapper } from "./styles";

// helpers

interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const useForgotPassword = useForgotPasswordMutation();
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  const updatePassword = async (data: any) => {
    setLoading(true);
    try {
      const response = await useForgotPassword.mutateAsync(data);
      dispatch(
        showToast(
          "Se ha enviado un link de restauración de contraseña al correo ingresado",
          "success"
        )
      );
    } catch (error: any) {
      console.error(error);
      dispatch(showToast(error?.response?.data?.message, "error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ForgotPasswordWrapper>
      <section className="brand-container">
        <h1 className="name">Prometeo</h1>
      </section>
      <section className="form-container">
        <form onSubmit={handleSubmit(updatePassword)}>
          <h3 className="title">Olvidó su contraseña</h3>
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
            Enviar {"->"}
          </Button>
        </form>
        <span className="back-to-login" onClick={() => navigate(ROUTES.LOGIN)}>
          Volver a login
        </span>
      </section>
    </ForgotPasswordWrapper>
  );
};

export default ForgotPassword;
