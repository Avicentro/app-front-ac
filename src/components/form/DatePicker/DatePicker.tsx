import { ChangeEvent, FC, useState } from "react";

// Components

// Styles
import { DatePickerWrapper } from "./styles";

// helpers
import { TextInputProps } from "../../../models";
import { useEffect } from "react";

interface DatePickerProps extends TextInputProps {}

const DatePicker: FC<DatePickerProps> = ({
  label,
  handleChange,
  value,
  type = "datetime-local",
  disabled,
}) => {
  const dateChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange?.(event.target.value);
  };

  return (
    <DatePickerWrapper>
      {label && <label htmlFor="date">{label}:</label>}
      <input
        type={type}
        id="date"
        value={value}
        onChange={dateChange}
        disabled={disabled}
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
