import { FC } from "react";
import { IConfig } from "../../../../../models";
import TextInput from "../../../TextInput/TextInput";
import DatePicker from "../../../DatePicker/DatePicker";
import COMPONENT_TYPES from "../../constants/componentTypes";
import CheckboxInput from "../../../CheckboxInput/CheckboxInput";
import FilterDropDown from "../../../FilterDropDown/FilterDropDown";
import TextArea from "../../../TextArea/TextArea";

export interface ComponentSelectorProps extends IConfig {
  handleChange?: (e: any) => any;
  error?: boolean;
  errorMessage?: string;
}

const ComponentSelector: FC<ComponentSelectorProps> = ({ ...props }) => {
  return (
    {
      [COMPONENT_TYPES.TEXT]: <TextInput {...props} />,
      [COMPONENT_TYPES.DATE]: <DatePicker {...props} />,
      [COMPONENT_TYPES.SELECT]: <FilterDropDown {...props} />,
      [COMPONENT_TYPES.HOURS_DATE]: <TextInput {...props} />,
      [COMPONENT_TYPES.CHECKBOX]: <CheckboxInput {...props} />,
      [COMPONENT_TYPES.TEXT_AREA]: <TextArea {...props} />,
    }[props.fieldType || ""] || <TextInput {...props} />
  );
};

export default ComponentSelector;
