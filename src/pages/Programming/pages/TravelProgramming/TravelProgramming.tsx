import { FC, useState } from "react";

// Components
import { formConfig } from "./config/formConfig";
import Button from "../../../../components/form/Button/Button";
import BackButton from "../../../../components/display/BackButton/BackButton";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { TravelProgrammingWrapper } from "./styles";

// helpers
import { mergeData } from "./helpers/mergeData";
import { typeButtonEnum } from "../../../../models";
import { getAllCustomers } from "./helpers/getAllCustomers";
import { getAvailableSchedulesList } from "./helpers/getAvailableSchedulesList";

// Hooks
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAllCustomers } from "../../../../hook/useSchedule";
import { useSaveScheduleData } from "../../../../hook/useSchedule";
import { useAvailableSchedules } from "../../../../hook/useSchedule";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import { showToast } from "../../../../store/toast/actions";
import { useDispatch } from "react-redux";

interface TravelProgrammingProps {}

const TravelProgramming: FC<TravelProgrammingProps> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { dateSelected = "none" } = useParams();
  const navigate = useNavigate();
  const saveScheduleData = useSaveScheduleData();
  const { data: availableSchedules } = useAvailableSchedules({
    date: dateSelected,
  });
  const { data: allCustomers } = useAllCustomers();

  const getFormat = () => {
    const daysOfWeek = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];
    const dayOfWeekIndex = new Date(dateSelected).getDay();
    return `${dateSelected} ${daysOfWeek[dayOfWeekIndex]}`;
  };

  const dataToMerge = [
    {
      name: "dateSelected",
      key: "value",
      value: getFormat(),
    },
    {
      name: "date",
      key: "options",
      value: availableSchedules?.data
        ? getAvailableSchedulesList(availableSchedules?.data)
        : [{ label: "No existe la jornada laboral", value: "" }],
    },
    {
      name: "customer",
      key: "options",
      value: allCustomers?.data
        ? getAllCustomers(allCustomers?.data)
        : [{ label: "No existen clientes", value: "" }],
    },
    {
      name: "supplier",
      key: "options",
      value: allCustomers?.data
        ? getAllCustomers(allCustomers?.data)
        : [{ label: "No existen Proveedores", value: "" }],
    },
    {
      name: "subCustomer",
      key: "options",
      value: allCustomers?.data
        ? getAllCustomers(allCustomers?.data)
        : [{ label: "No existen Sub clientes", value: "" }],
    },
    {
      name: "farm",
      key: "options",
      value: allCustomers?.data
        ? getAllCustomers(allCustomers?.data)
        : [{ label: "No existen granjas", value: "" }],
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
      const { dateSelected, ...rest } = data;
      const responseData = await saveScheduleData.mutateAsync(rest);
      navigate(`${COMPOSED_ROUTES.SUMMARY_PROGRAMMING}/${responseData.code}`);
    } catch (error: any) {
      dispatch(showToast(error?.response?.data?.message, "error"));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TravelProgrammingWrapper>
      <>
        <BackButton />
        <div className="title-schedule-form">
          <h1>Nueva programación</h1>
        </div>
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
              type="submit"
              loading={loading}
            >
              Guardar
            </Button>
          </div>
        </form>
      </>
    </TravelProgrammingWrapper>
  );
};

export default TravelProgramming;
