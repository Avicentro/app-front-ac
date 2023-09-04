import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BackButton from "../../../../components/display/BackButton/BackButton";
import Card from "../../../../components/display/Card/Card";
import LoadingContainer from "../../../../components/feedback/LoadingContainer/LoadingContainer";
import Spinner from "../../../../components/feedback/Spinner/Spinner";
import Button from "../../../../components/form/Button/Button";
import DatePicker from "../../../../components/form/DatePicker/DatePicker";
import TextInput from "../../../../components/form/TextInput/TextInput";
import { Container } from "../../../../components/genericStyles";
import {
  useAllLogbook,
  useSearchLogbookByDate,
  useSearchLogbookByQuery,
} from "../../../../hook/useLogbook";
import { typeButtonEnum } from "../../../../models";
import { showToast } from "../../../../store/toast/actions";
import LogbookHtml from "./components/LogbookHtml/LogbookHtml";

// Components

// Styles
import { LogbookProgrammingWrapper } from "./styles";

// helpers

interface LogbookProgrammingProps {}

const LogbookProgramming: FC<LogbookProgrammingProps> = () => {
  const [dateSelected, setDateSelected] = useState<string>("");
  const [textSelected, setTextSelected] = useState("");
  const [enabledAllLogbook, setEnabledAllLogbook] = useState(false);
  const [enabledLogbookByDate, setEnabledLogbookByDate] = useState(false);
  const [enabledLogbookByText, setEnabledLogbookByText] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const { data: dataByDate, isLoading: isLoadingByDate } =
    useSearchLogbookByDate({
      data: dateSelected ? new Date(dateSelected).toISOString() : "",
      enabled: enabledLogbookByDate,
    });
  const { data: allData, isLoading: isLoadingAllData } = useAllLogbook({
    enabled: enabledAllLogbook,
  });
  const { data: dataByText, isLoading: isLoadingByText } =
    useSearchLogbookByQuery({
      query: textSelected,
      enabled: enabledLogbookByText,
    });

  // Solo se usa para escuchar el cargar de las dos consultas y quitarlo cuando sea false
  useEffect(() => {
    if (!isLoadingByDate) {
      setSearchLoading(false);
    }
  }, [isLoadingByDate]);

  useEffect(() => {
    if (!isLoadingAllData) {
      setSearchLoading(false);
    }
  }, [isLoadingAllData]);

  useEffect(() => {
    if (!isLoadingByText) {
      setSearchLoading(false);
    }
  }, [isLoadingByText]);

  useEffect(() => {
    setData(dataByDate);
    resetSearchFields();
    setEnabledLogbookByDate(false);
    setSearchLoading(false);
  }, [dataByDate]);

  useEffect(() => {
    setData(dataByText);
    resetSearchFields();
    setEnabledLogbookByText(false);
    setSearchLoading(false);
  }, [dataByText]);

  useEffect(() => {
    setData(allData);
    setEnabledAllLogbook(false);
    setSearchLoading(false);
  }, [allData]);

  const resetSearchFields = () => {
    setDateSelected("");
    setTextSelected("");
  };

  const searchData = () => {
    setSearchLoading(true);
    if (!!dateSelected) {
      setEnabledLogbookByDate(true);
      setData(dataByDate);
    } else {
      setEnabledLogbookByText(true);
      setData(dataByText);
    }
    setTimeout(() => {
      setSearchLoading(false);
      resetSearchFields();
    }, 2000);
  };

  const searchAllData = () => {
    setSearchLoading(true);
    setEnabledAllLogbook(true);
    setData(allData);
    setTimeout(() => {
      setSearchLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <LogbookProgrammingWrapper>
        <BackButton />
        <Card>
          <div className="buttons-container">
            <div className="search-all-container">
              <Button
                extraProps={{ onClick: searchAllData }}
                typeButton={typeButtonEnum.stroke}
              >
                Consultar todas
              </Button>
            </div>
            <div className="search-by-parameters">
              <TextInput
                name="textSearch"
                value={textSelected}
                handleChange={setTextSelected}
                placeholder="Buscar"
                disabled={!!dateSelected}
              />
              <DatePicker
                name="dateFilter"
                handleChange={setDateSelected}
                value={dateSelected}
                disabled={!!textSelected}
              />
              <Button
                extraProps={{ onClick: searchData }}
                loading={searchLoading}
              >
                Buscar
              </Button>
            </div>
          </div>
          {searchLoading ? (
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>
          ) : (
            <>
              <div className="items-container">
                {data?.data?.length ? (
                  <>
                    {data?.data?.map((logbook: any) => (
                      <LogbookHtml html={logbook.logBook} date={logbook.date} />
                    ))}
                  </>
                ) : (
                  <div className="empty-container">
                    <h3>
                      No hay datos, por favor, ejecuta alguna acción de filtrado
                    </h3>
                  </div>
                )}
              </div>
            </>
          )}
        </Card>
      </LogbookProgrammingWrapper>
    </Container>
  );
};

export default LogbookProgramming;
