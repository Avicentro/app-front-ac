import { defaultValuesType, IConfig } from "../../../../models";

export const getDefaultValuesByConfig = (formConfig: IConfig[]) => {
  const defaultValues: defaultValuesType = {};
  formConfig.forEach((field) => {
    defaultValues[field.name] = field.value;
  });
  return defaultValues;
};
