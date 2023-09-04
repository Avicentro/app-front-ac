import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Components
import Card from "../../../../components/display/Card/Card";
import Button from "../../../../components/form/Button/Button";
import TimeInput from "../../../../components/form/TimeInput/TimeInput";
import DatePicker from "../../../../components/form/DatePicker/DatePicker";

// Styles
import { EntryTimeWrapper } from "./styles";

// helpers
import {
  useGetEntryTime,
  usePostSaveEntryTime,
  usePutSaveEntryTime,
} from "../../../../hook/useEntryTime";
import { sizeButtonEnum } from "../../../../models";
import { showToast } from "../../../../store/toast/actions";
import { getFormat } from "../../pages/helpers/getFormat";

interface EntryTimeProps {}

const KEY_ID_FOR_ICE_STORAGE = "initProcessId";
const initProcessId = localStorage.getItem(KEY_ID_FOR_ICE_STORAGE);

const EntryTime: FC<EntryTimeProps> = () => {
  const [timeSelected, setTimeSelected] = useState("");
  const [time, setTime] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const mutatePostSaveEntryTime = usePostSaveEntryTime();
  const mutatePutSaveEntryTime = usePutSaveEntryTime(initProcessId || "");
  const { data, isLoading, isError, refetch } = useGetEntryTime(
    initProcessId || ""
  );

  const dispatch = useDispatch();

  const saveHour = async () => {
    if (!!timeSelected) {
      setLoading(true);
      try {
        const currentDate = new Date();
        const [hours, minutes] = timeSelected.split(":");

        currentDate.setHours(parseInt(hours, 10));
        currentDate.setMinutes(parseInt(minutes, 10));
        let response;
        const dataToSend = {
          initProcess: new Date(dateSelected).toISOString(),
          entryHour: currentDate.toISOString(),
        };
        if (initProcessId) {
          response = await mutatePutSaveEntryTime.mutateAsync(dataToSend);
        } else {
          response = await mutatePostSaveEntryTime.mutateAsync(dataToSend);
        }
        localStorage.setItem(KEY_ID_FOR_ICE_STORAGE, response._id);
        refetch();
      } catch (error: any) {
        console.log("error", error);
        dispatch(showToast(error?.response?.data?.message, "error"));
      } finally {
        setLoading(false);
      }
    }
  };

  const getTime = useCallback(() => {
    if (data?.data?.entryHour) {
      const date = new Date(data?.data?.entryHour).toLocaleTimeString("es-CO", {
        timeZone: "America/Bogota",
      });
      setTime(date);
    }
  }, [data?.data?.entryHour]);

  const getDate = useCallback(() => {
    if (data?.data?.initProcess) {
      const date = getFormat(data?.data?.initProcess || new Date(), true);
      setDate(date);
    }
  }, [data?.data?.initProcess]);

  useEffect(() => {
    getDate();
  }, [getDate]);

  useEffect(() => {
    getTime();
  }, [getTime]);

  return (
    <EntryTimeWrapper>
      <Card customClass="card-entry-time">
        <div className="title-entry-time">
          <h3 className="title">Hora de entrada:</h3>
          <p className="title">
            {isError || isLoading ? "--:-- --" : <>{time}</>}
          </p>
        </div>
        <TimeInput name="amount" handleChange={setTimeSelected} />
        <div className="title-entry-date">
          <h3 className="title">Fecha del proceso:</h3>
          <p>{date ?? "yy-mm-dd"}</p>
        </div>
        <DatePicker
          name="dateProgramming"
          handleChange={setDateSelected}
          value={dateSelected}
          type="date"
        />
        <div className="button-container">
          <Button
            sizeButton={sizeButtonEnum.medium}
            loading={loading}
            extraProps={{ onClick: saveHour }}
          >
            Guardar hora
          </Button>
        </div>
      </Card>
    </EntryTimeWrapper>
  );
};

export default EntryTime;
