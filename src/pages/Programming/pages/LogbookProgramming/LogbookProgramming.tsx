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
} from "../../../../hook/useLogbook";
import { showToast } from "../../../../store/toast/actions";
import LogbookHtml from "./components/LogbookHtml/LogbookHtml";

// Components

// Styles
import { LogbookProgrammingWrapper } from "./styles";
import { Logbooks } from "./__mocks__/logbooks";

// helpers

interface LogbookProgrammingProps {}

const LogbookProgramming: FC<LogbookProgrammingProps> = () => {
  const [dateSelected, setDateSelected] = useState<string>("");
  const [textSelected, setTextSelected] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [data, setData] = useState([]);
  const { data: dataByDate, isLoading: isLoadingByDate } =
    useSearchLogbookByDate(
      dateSelected ? new Date(dateSelected).toISOString() : ""
    );
  const {
    data: allData,
    isLoading: isLoadingAllData,
    refetch: refetchAllData,
  } = useAllLogbook();

  const dispatch = useDispatch();

  useEffect(() => {
    setData(dataByDate);
  }, [dataByDate]);

  useEffect(() => {
    setData(allData);
  }, [allData]);

  const resetSearchFields = () => {
    setDateSelected("");
    setTextSelected("");
  };

  const searchData = () => {
    try {
      setSearchLoading(true);
      resetSearchFields();
    } catch (error: any) {
      dispatch(showToast(error?.response?.data?.message, "error"));
    } finally {
      setSearchLoading(false);
    }
  };

  const searchAllData = () => {
    try {
      setSearchLoading(true);
      resetSearchFields();
      refetchAllData();
    } catch (error: any) {
      dispatch(showToast(error?.response?.data?.message, "error"));
    } finally {
      setSearchLoading(false);
    }
  };
  return (
    <Container>
      <LogbookProgrammingWrapper>
        <BackButton />
        <Card>
          {searchLoading ? (
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>
          ) : (
            <>
              <div className="buttons-container">
                <div className="search-all-container">
                  <Button extraProps={{ onClick: searchAllData }}>
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
                  <Button extraProps={{ onClick: searchData }}>Buscar</Button>
                </div>
              </div>
              <div className="items-container">
                {Logbooks.map((logbook) => (
                  <LogbookHtml html={logbook.html} date={logbook.date} />
                ))}
              </div>
              {data}
            </>
          )}
        </Card>
      </LogbookProgrammingWrapper>
    </Container>
  );
};

export default LogbookProgramming;
