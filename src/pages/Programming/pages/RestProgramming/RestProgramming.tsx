import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Components
import BackButton from "../../../../components/display/BackButton/BackButton";
import DynamicForm from "../../../../components/form/DynamicForm/DynamicForm";
import { createSchemaByConfig } from "../../../../components/form/DynamicForm/helpers/createSchemaByConfig";
import { getDefaultValuesByConfig } from "../../../../components/form/DynamicForm/helpers/getDefaultValuesByConfig";

// Styles
import { RestProgrammingWrapper } from "./styles";

// helpers
import { formConfig } from "./config/formConfig";
import { getFormat } from "../helpers/getFormat";
import { mergeData } from "../helpers/mergeData";
import { typeButtonEnum } from "../../../../models";
import { yupResolver } from "@hookform/resolvers/yup";
import { showToast } from "../../../../store/toast/actions";
import { COMPOSED_ROUTES } from "../../../../constants/routes";
import Button from "../../../../components/form/Button/Button";
import { useSaveRestScheduleData } from "../../../../hook/useSchedule";
import Card from "../../../../components/display/Card/Card";
import { Title } from "../../../../components/genericStyles";

interface RestProgrammingProps {}

const RestProgramming: FC<RestProgrammingProps> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dateSelected = "none" } = useParams();
  const saveScheduleData = useSaveRestScheduleData();
  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: getDefaultValuesByConfig(formConfig),
    resolver: yupResolver(createSchemaByConfig(formConfig)),
  });

  const saveRest = async (data: any) => {
    try {
      setLoading(true);
      const { dateSelected, ...rest } = data;
      const responseData = await saveScheduleData.mutateAsync({
        ...rest,
        type: "rest",
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
    <RestProgrammingWrapper>
      <BackButton />
      <Card customClass="card-rest">
        <div className="title-schedule-form">
          <Title>Nuevo descanso</Title>
        </div>
        <form onSubmit={handleSubmit(saveRest)}>
          <DynamicForm
            formConfig={formConfig}
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
      </Card>
    </RestProgrammingWrapper>
  );
};

export default RestProgramming;
