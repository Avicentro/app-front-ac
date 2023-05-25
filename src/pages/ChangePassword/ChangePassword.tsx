import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/form/Button/Button";
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { useChangePasswordMutation } from "../../hook/useLogin";
import { sizeButtonEnum } from "../../models";
import { showToast } from "../../store/toast/actions";
import { formConfig } from "./formConfig/formConfig";

// Components

// Styles

import { ChangePasswordWrapper } from "./styles";

// helpers

interface ChangePasswordProps {}

const ChangePassword: FC<ChangePasswordProps> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { token = "" } = useParams();

  const useForgotPassword = useChangePasswordMutation(token);
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
        showToast("se ha actualizado su contraseña correctamente", "success")
      );
    } catch (error: any) {
      console.error(error);
      dispatch(showToast(error?.response?.data?.message, "error"));
    } finally {
      setLoading(false);
    }
  };
  return (
    <ChangePasswordWrapper>
      <section className="brand-container">
        <h1 className="name">Prometeo</h1>
      </section>
      <section className="form-container">
        <form onSubmit={handleSubmit(updatePassword)}>
          <h3 className="title">Cambio de contraseña</h3>
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
        <span className="back-to-login">Volver a login</span>
      </section>
    </ChangePasswordWrapper>
  );
};

export default ChangePassword;
