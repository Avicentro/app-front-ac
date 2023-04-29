import { FC, useState } from "react";

// Components
import { formConfig } from "./config/formConfig";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";

// Styles
import { TravelProgrammingWrapper } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/form/Button/Button";
import { typeButtonEnum } from "../../../../models";
import {
  useAllCustomers,
  useAvailableSchedules,
  useSaveScheduleData,
  useWorkingTime,
} from "../../../../hook/useSchedule";
import { mergeData } from "./helpers/mergeData";
import { getAvailableSchedulesList } from "./helpers/getAvailableSchedulesList";
import { getAllCustomers } from "./helpers/getAllCustomers";
import { Container } from "../../../../components/genericStyles";
import { COMPOSED_ROUTES, ROUTES } from "../../../../constants/routes";
import SummarySchedule from "../SummarySchedule/SummarySchedule";

// helpers

interface TravelProgrammingProps {}

const TravelProgramming: FC<TravelProgrammingProps> = () => {
  const [loading, setLoading] = useState(false);
  const [isDataSave, setIsDataSave] = useState(false);
  const [responseData, setResponseData] = useState(undefined);

  const { dateSelected = "none" } = useParams();
  const saveScheduleData = useSaveScheduleData();
  // const createWorkingTime = useWorkingTime();
  const { data: availableSchedules } = useAvailableSchedules({
    date: dateSelected,
  });
  const { data: allCustomers } = useAllCustomers();
  console.log("allCustomers", allCustomers);
  const dataToMerge = [
    {
      name: "date",
      key: "value",
      value: dateSelected,
    },
    {
      name: "availability",
      key: "options",
      value: availableSchedules?.data
        ? getAvailableSchedulesList(availableSchedules?.data)
        : [{ label: "No existe la jornada laboral", value: "" }],
    },
    {
      name: "idCustomer",
      key: "options",
      value: allCustomers?.data
        ? getAllCustomers(allCustomers?.data)
        : [{ label: "No existen clientes", value: "" }],
    },
    {
      name: "idSupplier",
      key: "options",
      value: allCustomers?.data
        ? getAllCustomers(allCustomers?.data)
        : [{ label: "No existen Proveedores", value: "" }],
    },
    {
      name: "idSubCustomer",
      key: "options",
      value: allCustomers?.data
        ? getAllCustomers(allCustomers?.data)
        : [{ label: "No existen Sub clientes", value: "" }],
    },
  ];

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchemaByConfig(formConfig)),
    defaultValues: getDefaultValuesByConfig(
      mergeData({
        formConfig,
        dataToMerge,
      })
    ),
  });

  const saveProgramming = async (data: any) => {
    try {
      setLoading(true);
      const { data } = await saveScheduleData.mutateAsync();
      console.log("data", data);
      setResponseData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsDataSave(true);
    }
  };

  return (
    <TravelProgrammingWrapper>
      {isDataSave ? (
        <SummarySchedule data={responseData}></SummarySchedule>
      ) : (
        <form onSubmit={handleSubmit(saveProgramming)}>
          <DynamicForm
            formConfig={mergeData({
              formConfig,
              dataToMerge,
            })}
            errors={errors}
            setValue={setValue}
            control={control}
          />
          <div className="buttons-container">
            <Button
              typeButton={typeButtonEnum.fill}
              loading={loading}
              extraProps={{ onClick: () => saveProgramming({}) }}
            >
              Guardar
            </Button>
          </div>
        </form>
      )}
    </TravelProgrammingWrapper>
  );
};

export default TravelProgramming;
