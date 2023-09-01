import { ChangeEvent, FC, useState } from "react";

// Components

// Styles
import { DatePickerWrapper } from "./styles";

// helpers
import { TextInputProps } from "../../../models";

interface DatePickerProps extends TextInputProps {}

const DatePicker: FC<DatePickerProps> = ({
  label,
  handleChange,
  value,
  type = "datetime-local",
}) => {
  const [selectedDate, setSelectedDate] = useState("");

  const dateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    handleChange?.(event.target.value);
  };

  return (
    <DatePickerWrapper>
      {label && <label htmlFor="date">{label}:</label>}
      <input type={type} id="date" value={selectedDate} onChange={dateChange} />
    </DatePickerWrapper>
  );
};

export default DatePicker;
