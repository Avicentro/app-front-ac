import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { formConfig } from "./config/formConfig";

// Components

// Styles

import { RestProgrammingWrapper } from "./styles";

// helpers

interface RestProgrammingProps {}

const RestProgramming: FC<RestProgrammingProps> = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchemaByConfig(formConfig)),
    defaultValues: getDefaultValuesByConfig(formConfig),
  });

  return (
    <RestProgrammingWrapper>
      {
        <DynamicForm
          formConfig={formConfig}
          errors={errors}
          setValue={setValue}
          control={control}
        />
      }
    </RestProgrammingWrapper>
  );
};

export default RestProgramming;
