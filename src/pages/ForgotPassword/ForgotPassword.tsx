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

import { BrandImage } from "./styles";
import logoPrometeo from "../../static/img/prometeo_brand_red.svg";
import LayoutAuth from "../../layoutAuth/LayoutAuth";
import { Title } from "../../components/genericStyles";

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
    <LayoutAuth>
        <div className="brand-container">
          <BrandImage className="brand-name" src={logoPrometeo} alt="prometeo" />
        </div>
        <form onSubmit={handleSubmit(updatePassword)}>
          <Title>Olvidó su contraseña</Title>
          <DynamicForm
            formConfig={formConfig}
            errors={errors}
            setValue={setValue}
            control={control}
          />
          <div className="sign-in-btn">
          <Button
            type="submit"
            mb={28}
            sizeButton={sizeButtonEnum.medium}
            loading={loading}
          >
            Enviar
          </Button>
          </div>
        </form>
        <span className="forgot-password" onClick={() => navigate(ROUTES.LOGIN)}>
          Volver a login
        </span>
    </LayoutAuth>
  );
};

export default ForgotPassword;
