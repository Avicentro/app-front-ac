import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../../customHooks/useOutsideClick";
import { optionsType, TextInputProps } from "../../../models";

// Components

// Styles

import { FilterDropDownWrapper } from "./styles";

// helpers

// interface FilterDropDownProps extends TextInputProps {
//   options?: optionsType[];
// }
interface FilterDropDownProps {
  label?: any;
  options?: any;
  name?: any;
  handleChange?: any;
  value?: any;
}

const FilterDropDown: FC<FilterDropDownProps> = ({
  label,
  options,
  name,
  handleChange,
  value,
}) => {
  const [valueSelected, setValueSelected] = useState(value);
  const [showOptions, setShowOptions] = useState(false);
  const [filterContent, setFilterContent] = useState("");
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
        .includes(filterContent.toString().toLowerCase())
    );
  };

  const selectOption = (value: any) => {
    setValueSelected(value);
    handleChange && handleChange(value);
    setShowOptions(false);
    setFilterContent("");
  };

  const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const valueFilter = event.target.value;
    setFilterContent(valueFilter);
  };

  return (
    <FilterDropDownWrapper>
      {label && <label htmlFor={name}>{label}:</label>}
      <div className="select-field-container" ref={contentRef}>
        <div
          className="content-select-container"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          {getLabelSelected()}
        </div>
        {showOptions && (
          <div
            className="options-container"
            style={{
              top:
                Number(contentRef?.current?.offsetHeight) +
                spaceBetweenDivAndOptions,
            }}
          >
            <li className="option filter-input">
              <input
                type="text"
                value={filterContent}
                onChange={changeFilter}
                placeholder="Filtrar"
              />
            </li>
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
    </FilterDropDownWrapper>
  );
};

export default FilterDropDown;
