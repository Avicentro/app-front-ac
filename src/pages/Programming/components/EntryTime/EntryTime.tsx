import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../../../components/display/Card/Card";
import Button from "../../../../components/form/Button/Button";
import TimeInput from "../../../../components/form/TimeInput/TimeInput";
import { useSaveEntryTime } from "../../../../hook/useEntryTime";
import { sizeButtonEnum } from "../../../../models";
import { showToast } from "../../../../store/toast/actions";

// Components

// Styles
import { EntryTimeWrapper } from "./styles";

// helpers

interface EntryTimeProps {
  dateInView: string;
}

const EntryTime: FC<EntryTimeProps> = ({ dateInView }) => {
  const [timeSelected, setTimeSelected] = useState("");
  const [loading, setLoading] = useState(false);
  // const {data, isLoading, isError} = useGetEntryTime(dateInView)
  const mutateSaveEntryTime = useSaveEntryTime();

  const dispatch = useDispatch();

  const saveHour = async () => {
    if (!!timeSelected) {
      setLoading(true);
      try {
        const currentDate = new Date();
        const [hours, minutes] = timeSelected.split(":");

        currentDate.setHours(parseInt(hours, 10));
        currentDate.setMinutes(parseInt(minutes, 10));

        await mutateSaveEntryTime.mutateAsync(currentDate.toISOString());
      } catch (error: any) {
        dispatch(showToast(error.response.data.message, "error"));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <EntryTimeWrapper>
      <Card customClass="card-entry-time">
        <h3>Hora de entrada</h3>
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
