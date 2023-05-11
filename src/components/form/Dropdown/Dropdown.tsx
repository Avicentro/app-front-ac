import { FC } from "react";

// Components

// Styles
import { DropdownWrapper } from "./styles";

// helpers
import { optionsType, TextInputProps } from "../../../models";

interface DropdownProps extends TextInputProps {
  options?: optionsType[];
}

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  name,
  handleChange,
  value,
}) => {
  return (
    <DropdownWrapper>
      <label htmlFor={name}>{label}:</label>
      <select
        name={name}
        id={name}
        className="select"
        onChange={(e) => handleChange(e.target.value)}
      >
        {options?.map(({ label: innerLabel, value: innerValue }) => (
          <option value={innerValue}>{innerLabel}</option>
        ))}
      </select>
    </DropdownWrapper>
  );
};

export default Dropdown;
