import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../components/form/Button/Button";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { sizeButtonEnum } from "../../../../models";
import { formConfig } from "./config/formConfig";

// Components

// Styles

import { CreateWrapper } from "./styles";

// helpers

interface CreateProps {
  handleSubmit: (data: any) => void;
  isEdit: boolean;
}

const Create: FC<CreateProps> = ({ handleSubmit, isEdit }) => {
  const {
    control,
    setValue,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  return (
    <CreateWrapper>
      <form onSubmit={submitForm(handleSubmit)}>
        <DynamicForm
          formConfig={formConfig}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <Button type="submit" mb={8} sizeButton={sizeButtonEnum.medium}>
          {isEdit ? <>Editar</> : <>Crear</>}
        </Button>
      </form>
    </CreateWrapper>
  );
};

export default Create;
