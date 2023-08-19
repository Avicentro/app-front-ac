import { FC, Fragment } from "react";

// Components

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
    <DynamicFormWrapper
      className="dynamic-form-container"
      numberOfColumns={numberOfColumns}
    >
      {formConfig.map(({ name, ...props }, index) => (
        <Fragment key={`${name}_${index}`}>
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              return (
                <ComponentSelector
                  handleChange={(e) => {
                    setValue(name, e);
                    console.log("{...props}", { ...props });
                    console.log(" {...field}", { ...field });
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
