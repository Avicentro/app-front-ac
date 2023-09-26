import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../../customHooks/useOutsideClick";
import TextInput from "../TextInput/TextInput";

// Components

// Styles

import { FilterDropDownTextWrapper } from "./styles";

// helpers

interface FilterDropDownTextProps {
  label?: any;
  options?: any;
  name?: any;
  handleChange?: any;
  value?: any;
}

const FilterDropDownText: FC<FilterDropDownTextProps> = ({
  label,
  options,
  name,
  handleChange,
  value,
}) => {
  const [valueSelected, setValueSelected] = useState(value);
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [localOptions, setLocalOptions] = useState<any[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);

  useOutsideClick(contentRef, () => setShowOptions(false));

  const spaceBetweenDivAndOptions = 0;

  useEffect(() => {
    setLocalOptions(options);
  }, [options]);

  const getLabelSelected = () => {
    const localLabel = localOptions?.find(
      (option: any) => option.value === valueSelected
    )?.label;
    return localLabel;
  };

  const getOptionsFiltered = () => {
    return localOptions.filter((option) =>
      option.label
        .toString()
        .toLowerCase()
        .includes(inputValue.toString().toLowerCase())
    );
  };

  const selectOption = (value: any) => {
    setValueSelected(value);
    handleChange?.(value);
    setShowOptions(false);
    setInputValue("");
  };

  return (
    <FilterDropDownTextWrapper className="dropdown-field">
      <div className="select-field-container" ref={contentRef}>
        <TextInput
          name={name}
          label={label}
          value={inputValue}
          handleChange={setInputValue}
        />
        {showOptions && (
          <div
            className="options-container"
            style={{
              top:
                Number(contentRef?.current?.offsetHeight) +
                spaceBetweenDivAndOptions,
            }}
          >
            {getOptionsFiltered().map(({ label, value }) => (
              <li
                key={label + "-" + value}
                className="option item"
                onClick={() => selectOption(value)}
              >
                <span>{label}</span>
              </li>
            ))}
          </div>
        )}
      </div>
    </FilterDropDownTextWrapper>
  );
};

export default FilterDropDownText;
