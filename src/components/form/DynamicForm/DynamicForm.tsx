import { FC, Fragment } from "react";

// Components
import TextInput from "../TextInput/TextInput";

// Styles
import { DynamicFormWrapper } from "./styles";

// Model
import { DynamicFormProps } from "./model";
import { Controller } from "react-hook-form";

// helpers

const DynamicForm: FC<DynamicFormProps> = ({
  mb,
  errors,
  control,
  setValue,
  formConfig,
  numberOfColumns = 1,
}) => {
  return (
    <DynamicFormWrapper numberOfColumns={numberOfColumns}>
      {formConfig.map(({ name, label, type, placeholder, value }, index) => (
        <Fragment key={`${name}_${index}`}>
          <Controller
            name={name}
            control={control}
            render={() => {
              return (
                <TextInput
                  key={`${name}_${index}`}
                  name={name}
                  label={label}
                  type={type}
                  value={value}
                  placeholder={placeholder}
                  handleChange={(e) => setValue(name, e)}
                  mb={mb}
                  error={!!errors[name]}
                  errorMessage={errors[name]?.message || ""}
                />
              );
            }}
          />
        </Fragment>
      ))}
    </DynamicFormWrapper>
  );
};

export default DynamicForm;
