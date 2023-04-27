import { FC } from "react";

// Components
import { formConfig } from "./config/formConfig";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";

// Styles
import { TravelProgrammingWrapper } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { useForm } from "react-hook-form";
import { mergeDate } from "./helpers/mergeDate";
import { useParams } from "react-router-dom";
import Button from "../../../../components/form/Button/Button";
import { typeButtonEnum } from "../../../../models";

// helpers

interface TravelProgrammingProps {}

const TravelProgramming: FC<TravelProgrammingProps> = () => {
  const { dateSelected = "none" } = useParams();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchemaByConfig(formConfig)),
    defaultValues: getDefaultValuesByConfig(
      mergeDate(formConfig, dateSelected)
    ),
  });

  const saveProgramming = async (data: any) => {
    try {
    } catch (error) {
    } finally {
    }
  };

  return (
    <TravelProgrammingWrapper>
      <form onSubmit={handleSubmit(saveProgramming)}>
        <DynamicForm
          formConfig={formConfig}
          errors={errors}
          setValue={setValue}
          control={control}
        />
        <div className="buttons-container">
          <Button typeButton={typeButtonEnum.stroke}>Cancelar</Button>
          <Button typeButton={typeButtonEnum.fill}>Guardar</Button>
        </div>
      </form>
    </TravelProgrammingWrapper>
  );
};

export default TravelProgramming;
