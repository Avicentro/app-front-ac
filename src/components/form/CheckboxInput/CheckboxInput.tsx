import { ChangeEvent, FC } from "react";

// Components

// Styles
import { CheckboxInputWrapper } from "./styles";

// helpers

interface CheckboxProps {
  value: any;
  name: string;
  label?: string;
  otherProps?: any;
  disabled?: boolean;
  handleChange?: (s: any) => any;
}

const CheckboxInput: FC<CheckboxProps> = ({
  value,
  name,
  label,
  disabled,
  otherProps,
  handleChange,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange?.(e.target.checked);
  };

  return (
    <CheckboxInputWrapper>
      <input
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...otherProps}
      />
      {label && <p className="label">{label}</p>}
    </CheckboxInputWrapper>
  );
};

export default CheckboxInput;
