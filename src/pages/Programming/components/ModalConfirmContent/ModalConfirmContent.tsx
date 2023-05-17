import { FC } from "react";

// Components
import Button from "../../../../components/form/Button/Button";

// Styles
import { ModalConfirmContentWrapper } from "./styles";

// helpers
import { formConfigType, sizeButtonEnum } from "../../../../models";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";

interface ModalConfirmContentProps {
  handleClick: any;
  loading: boolean;
  formConfig: formConfigType[];
}

const MODAL_CONTENT_LABEL =
  "¿Está seguro que desea modificar la programación de la jornada laboral?";

const ModalConfirmContent: FC<ModalConfirmContentProps> = ({
  handleClick,
  loading,
  formConfig,
}) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  return (
    <ModalConfirmContentWrapper>
      <p className="modal-label">{MODAL_CONTENT_LABEL}</p>
      <form onSubmit={handleSubmit(handleClick)}>
        <DynamicForm
          formConfig={formConfig}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <div className="call-to-action-container">
          <Button
            sizeButton={sizeButtonEnum.extraBig}
            loading={loading}
            type="submit"
          >
            Re programar
          </Button>
        </div>
      </form>
    </ModalConfirmContentWrapper>
  );
};

export default ModalConfirmContent;
