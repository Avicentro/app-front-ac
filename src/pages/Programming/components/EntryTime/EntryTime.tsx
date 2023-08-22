import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../../../components/display/Card/Card";
import Button from "../../../../components/form/Button/Button";
import TimeInput from "../../../../components/form/TimeInput/TimeInput";
import {
  useGetEntryTime,
  usePostSaveEntryTime,
  usePutSaveEntryTime,
} from "../../../../hook/useEntryTime";
import { sizeButtonEnum } from "../../../../models";
import { showToast } from "../../../../store/toast/actions";

// Components

// Styles
import { EntryTimeWrapper } from "./styles";

// helpers

interface EntryTimeProps {}

const KEY_ID_FOR_ICE_STORAGE = "initProcessId";
const initProcessId = localStorage.getItem(KEY_ID_FOR_ICE_STORAGE);

const EntryTime: FC<EntryTimeProps> = () => {
  const [timeSelected, setTimeSelected] = useState("");
  const [time, setTime] = useState("");
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
        const dataToSend = { initProcess: currentDate.toISOString() };
        if (initProcessId) {
          response = await mutatePutSaveEntryTime.mutateAsync(dataToSend);
        } else {
          response = await mutatePostSaveEntryTime.mutateAsync(dataToSend);
        }
        localStorage.setItem(KEY_ID_FOR_ICE_STORAGE, response._id);
        refetch();
      } catch (error: any) {
        dispatch(showToast(error.response.data.message, "error"));
      } finally {
        setLoading(false);
      }
    }
  };

  const getTime = useCallback(() => {
    if (data?.data?.initProcess) {
      const date = new Date(data?.data?.initProcess).toLocaleTimeString(
        "es-CO",
        {
          timeZone: "America/Bogota",
        }
      );
      setTime(date);
    }
  }, [data?.data?.initProcess]);

  useEffect(() => {
    getTime();
  }, [getTime]);

  return (
    <EntryTimeWrapper>
      <Card customClass="card-entry-time">
        <div className="title-entry-time">
          <h3>Hora de entrada:</h3>
          <h3>{isError || isLoading ? "--:-- --" : <>{time}</>}</h3>
        </div>
        <TimeInput name="amount" handleChange={setTimeSelected} />
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
