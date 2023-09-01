import { FC, useState } from "react";

// Components
import { Container, Title } from "../../../../components/genericStyles";
import CustomTable from "../../../../components/display/CustomTable/CustomTable";

// Styles
import { HistoryProgrammingWrapper } from "./styles";

// helpers
import { COLUMNS_SCHEDULE } from "./config/config";
import { useAllSchedules } from "../../../../hook/useSchedule";
import { getColumnsWithCallbacks } from "../../../../components/display/CustomTable/helpers/getColumnsWithCallbacks";
import Card from "../../../../components/display/Card/Card";
import BackButton from "../../../../components/display/BackButton/BackButton";
import DatePicker from "../../../../components/form/DatePicker/DatePicker";
import Button from "../../../../components/form/Button/Button";
import { getFormat } from "../helpers/getFormat";

interface HistoryProgrammingProps {}

const HistoryProgramming: FC<HistoryProgrammingProps> = () => {
  const [dateSelected, setDateSelected] = useState("");
  const [date, setDate] = useState(new Date());
  const { data, isLoading, isError, refetch } = useAllSchedules(
    {},
    date.toISOString(),
    date
  );

  const actionsToMatch = {};

  const searchByDate = () => {
    refetch();
    setDate(new Date(dateSelected));
  };

  return (
    <Container>
      <HistoryProgrammingWrapper>
        <BackButton />
        <div className="header-container">
          <Title>{getFormat(date, true)}</Title>
          <div className="buttons-container">
            <DatePicker
              name={dateSelected}
              type="date"
              value={dateSelected}
              handleChange={setDateSelected}
            />
            <Button extraProps={{ onClick: searchByDate }}>Buscar</Button>
          </div>
        </div>
        <Card>
          <CustomTable
            data={data?.data || []}
            columns={getColumnsWithCallbacks(COLUMNS_SCHEDULE, actionsToMatch)}
            loading={isLoading}
          />
        </Card>
      </HistoryProgrammingWrapper>
    </Container>
  );
};

export default HistoryProgramming;
