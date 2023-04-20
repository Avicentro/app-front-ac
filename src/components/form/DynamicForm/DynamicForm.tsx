import { FC } from "react";

// Components

// Styles
import { DynamicFormWrapper } from "./styles";

// Model
import { IConfig } from "./models";

// helpers
import TextInput from "../TextInput/TextInput";

interface DynamicFormProps {
  formConfig: IConfig[];
  errors: any;
  setValue: (nameOfField: string, valueForChange: any) => any;
  register: (s: string) => any;
}

const DynamicForm: FC<DynamicFormProps> = ({
  formConfig,
  errors,
  setValue,
  register,
}) => {
  return (
    <DynamicFormWrapper>
      {formConfig.map(({ name, label, mb, type, placeholder }, index) => (
        <TextInput
          key={`${name}_${index}`}
          label={label}
          type={type}
          placeholder={placeholder}
          handleChange={(e) => setValue(name, e)}
          otherProps={register(name)}
          error={!!errors[name]}
          errorMessage={errors[name]?.message || ""}
          mb={mb}
        />
      ))}
    </DynamicFormWrapper>
  );
};

export default DynamicForm;
