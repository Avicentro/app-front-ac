import { FC } from "react";
import { IConfig } from "../../../../../models";
import TextInput from "../../../TextInput/TextInput";
import COMPONENT_TYPES from "../../constants/componentTypes";

interface ComponentSelectorProps extends IConfig {
  handleChange: (e: any) => any;
  error: boolean;
  errorMessage: string;
}

const ComponentSelector: FC<ComponentSelectorProps> = ({ ...props }) => {
  return (
    {
      [COMPONENT_TYPES.TEXT]: <TextInput {...props} />,
      [COMPONENT_TYPES.DATE]: <TextInput {...props} />,
      [COMPONENT_TYPES.HOURS_DATE]: <TextInput {...props} />,
    }[props.type] || <TextInput {...props} />
  );
};

export default ComponentSelector;
