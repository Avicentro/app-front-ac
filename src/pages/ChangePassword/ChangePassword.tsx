import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/form/Button/Button";
import DynamicForm from "../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { Title } from "../../components/genericStyles";
import { ROUTES } from "../../constants/routes";
import { useChangePasswordMutation } from "../../hook/useLogin";
import { sizeButtonEnum } from "../../models";
import { showToast } from "../../store/toast/actions";
import { BrandImage } from "../Login/styles";
import { formConfig } from "./formConfig/formConfig";

// Components

// Styles

import { ChangePasswordWrapper } from "./styles";
import logoPrometeo from "../../static/img/prometeo_brand_red.svg";
import RightArrow from "../../static/vectors/right-arrow-svgrepo-com.svg";
import LayoutAuth from "../../layoutAuth/LayoutAuth";
// helpers

interface ChangePasswordProps {}

const ChangePassword: FC<ChangePasswordProps> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      await useForgotPassword.mutateAsync(data);
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
    <LayoutAuth>
      <ChangePasswordWrapper>
        <div className="brand-container">
          <BrandImage
            className="brand-name"
            src={logoPrometeo}
            alt="prometeo"
          />
        </div>
        <form onSubmit={handleSubmit(updatePassword)}>
          <Title>Cambiar contraseña</Title>
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
                Cambiar contraseña
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
        <span className="back-to-login" onClick={() => navigate(ROUTES.LOGIN)}>
          Volver al login
        </span>
      </ChangePasswordWrapper>
    </LayoutAuth>
  );
};

export default ChangePassword;
