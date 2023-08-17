import { ChangeEvent, FC } from "react";

// Components

// Styles

import { TimeInputWrapper } from "./styles";

// helpers

interface TimeInputProps {
  name: string;
  min?: string;
  max?: string;
  handleChange?: (hour: any) => any;
  value?: any;
  label?: string;
  error?: boolean;
}

const TimeInput: FC<TimeInputProps> = ({
  name,
  min,
  max,
  value,
  handleChange,
  label,
  error,
}) => {
  const onTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange?.(event.target.value);
  };
  return (
    <TimeInputWrapper error={error}>
      {label && <p className="label">{label}:</p>}
      <input
        type="time"
        name={name}
        min={min}
        max={max}
        onChange={onTimeChange}
        value={value}
      />
    </TimeInputWrapper>
  );
};

export default TimeInput;
