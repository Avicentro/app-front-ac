import { FC } from "react";
import { IConfig } from "../../../../../models";
import DatePicker from "../../../DatePicker/DatePicker";
import Dropdown from "../../../Dropdown/Dropdown";
import TextInput from "../../../TextInput/TextInput";
import COMPONENT_TYPES from "../../constants/componentTypes";

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
      [COMPONENT_TYPES.SELECT]: <Dropdown {...props} />,
      [COMPONENT_TYPES.HOURS_DATE]: <TextInput {...props} />,
    }[props.fieldType || ""] || <TextInput {...props} />
  );
};

export default ComponentSelector;
