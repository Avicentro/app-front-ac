import { FC, Fragment } from "react";

// Components
import TextInput from "../TextInput/TextInput";

// Styles
import { DynamicFormWrapper } from "./styles";

// Model
import { DynamicFormProps } from "./model";
import { Controller } from "react-hook-form";
import ComponentSelector from "./components/ComponentSelector/ComponentSelector";

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
      {formConfig.map(({ name, ...props }, index) => (
        <Fragment key={`${name}_${index}`}>
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              return (
                <ComponentSelector
                  handleChange={(e) => {
                    console.log("ejecuta el gandle?", e);
                    setValue(name, e);
                  }}
                  mb={mb}
                  error={!!errors[name]}
                  errorMessage={errors[name]?.message || ""}
                  {...props}
                  {...field}
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
