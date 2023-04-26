import { FC } from "react";

// Components

// Styles
import { TextInputWrapper } from "./styles";

// helpers

// Model
import { typeType } from "../../../models";

interface TextInputProps {
  type: typeType;
  name?: string;
  value?: any;
  placeholder: string | number;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  size?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  form?: string;
  handleChange: (s: any) => any;
  otherProps?: any;
  label?: string;
  error?: boolean;
  errorMessage?: any;
  mb?: number;
}

const TextInput: FC<TextInputProps> = ({
  type = "text",
  name,
  value,
  placeholder,
  required,
  disabled,
  readOnly,
  maxLength,
  size,
  min,
  max,
  step,
  pattern,
  autoComplete,
  autoFocus,
  form,
  handleChange,
  otherProps,
  label,
  error,
  errorMessage,
  mb,
}) => {
  const onChange = (e: any) => {
    handleChange(e.target.value);
  };
  return (
    <TextInputWrapper className="input-container" error={error} mb={mb}>
      {label && <p className="label">{label}</p>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        size={size}
        min={min}
        max={max}
        step={step}
        pattern={pattern}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        form={form}
        onChange={onChange}
        {...otherProps}
      />
      {error && <p>*{errorMessage}</p>}
    </TextInputWrapper>
  );
};

export default TextInput;
