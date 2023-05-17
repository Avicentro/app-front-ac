import { FC } from "react";

// Components
import Button from "../../../../../../components/form/Button/Button";
import DynamicForm from "../../../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { EntryOrderFormWrapper } from "./styles";

// helpers
import { useForm } from "react-hook-form";
import { entryOrderConfig } from "./entryOrderConfig";
import { yupResolver } from "@hookform/resolvers/yup";

interface EntryOrderFormProps {
  handleSubmit: (s: any) => void;
  loading: boolean;
}

const EntryOrderForm: FC<EntryOrderFormProps> = ({ handleSubmit, loading }) => {
  const {
    control,
    setValue,
    handleSubmit: innerHandleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultValuesByConfig(entryOrderConfig),
    resolver: yupResolver(createSchemaByConfig(entryOrderConfig)),
  });

  return (
    <EntryOrderFormWrapper onSubmit={innerHandleSubmit(handleSubmit)}>
      <DynamicForm
        formConfig={entryOrderConfig}
        errors={errors}
        setValue={setValue}
        control={control}
        numberOfColumns={2}
      />
      <Button loading={loading} type="submit">
        Guardar cambios
      </Button>
    </EntryOrderFormWrapper>
  );
};

export default EntryOrderForm;
