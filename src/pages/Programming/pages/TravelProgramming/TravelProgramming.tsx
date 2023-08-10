import { FC, useState } from "react";
import { useDispatch } from "react-redux";

// Components
import { formConfig } from "./config/formConfig";
import { showToast } from "../../../../store/toast/actions";
import Card from "../../../../components/display/Card/Card";
import Button from "../../../../components/form/Button/Button";
import BackButton from "../../../../components/display/BackButton/BackButton";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { TravelProgrammingWrapper } from "./styles";

// helpers
import { mergeData } from "../helpers/mergeData";
import { typeButtonEnum } from "../../../../models";
import { getAllCustomers } from "../helpers/getAllCustomers";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import { useAllCustomers } from "../../../../hook/useSchedule";
import { getAvailableSchedulesList } from "../helpers/getAvailableSchedulesList";

// Hooks
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useSaveScheduleData } from "../../../../hook/useSchedule";
import { getFormat } from "../helpers/getFormat";
import { addHours } from "../helpers/addHours";

interface TravelProgrammingProps {}

const TravelProgramming: FC<TravelProgrammingProps> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { dateSelected = "none" } = useParams();
  const navigate = useNavigate();
  const saveScheduleData = useSaveScheduleData();
  const { data: allCustomers } = useAllCustomers();

  const dataToMerge = [
    {
      name: "date",
      key: "value",
      value: getFormat(dateSelected),
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
      const { date, ...rest } = data;
      console.log("dateSelected", new Date(dateSelected));
      const responseData = await saveScheduleData.mutateAsync({
        ...rest,
        type: "travel",
        dateStart: new Date(dateSelected),
        dateEnd: addHours(new Date(dateSelected), 25),
      });
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
        <Card customClass="card-travel">
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
            <div className="buttons-container-travel">
              <Button
                typeButton={typeButtonEnum.fill}
                type="submit"
                loading={loading}
              >
                Guardar
              </Button>
            </div>
          </form>
        </Card>
      </>
    </TravelProgrammingWrapper>
  );
};

export default TravelProgramming;
