import { FC, useEffect, useState } from "react";

// Components
import Autocomplete from "react-autocomplete";
// Styles
import { AutoCompleteWrapper } from "./styles";

// helpers
import { theme } from "../../../static/styles/theme";

interface AutoCompleteProps {
  label?: any;
  options?: any[];
  name?: any;
  handleChange?: any;
  value?: any;
}

const AutoComplete: FC<AutoCompleteProps> = ({
  label,
  options,
  handleChange,
  value,
}) => {
  const [valueSelected, setValueSelected] = useState(value);
  const [inputValue, setInputValue] = useState("");
  const [localOptions, setLocalOptions] = useState<any[] | undefined>([]);

  useEffect(() => {
    setLocalOptions(options);
  }, [options]);

  const getLabelSelected = (value?: any) => {
    const localLabel = localOptions?.find(
      (option: any) => option.value === (value || valueSelected)
    )?.label;
    return localLabel;
  };

  const selectOption = (value: any) => {
    setValueSelected(value);
    handleChange?.(value);
    setInputValue((prev) => getLabelSelected(value));
  };

  return (
    <AutoCompleteWrapper className="dropdown-field">
      <div className="select-field-container">
        <p className="label">{label}</p>
        <Autocomplete
          getItemValue={(item) => item.value}
          items={options || []}
          shouldItemRender={(item, value) =>
            item?.label?.toLowerCase().indexOf(value?.toLowerCase()) > -1
          }
          renderItem={(item, isHighlighted) => (
            <div
              key={item.value}
              style={{
                display: "flex",
                background: isHighlighted ? theme.coolGray200 : "white",
                cursor: "pointer",
                height: "30px",
                alignItems: "center",
              }}
            >
              {item.label}
            </div>
          )}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSelect={(val) => selectOption(val)}
          menuStyle={{
            zIndex: 999,
            padding: "20px",
            border: `1px solid ${theme.coolGray300}`,
            borderRadius: "8px",
          }}
        />
      </div>
    </AutoCompleteWrapper>
  );
};

export default AutoComplete;
