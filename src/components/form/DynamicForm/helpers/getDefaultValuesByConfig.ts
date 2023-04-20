import { IConfig } from "../models";

type defaultValuesType = {
  [key: string]: any;
};

export const getDefaultValuesByConfig = (formConfig: IConfig[]) => {
  const defaultValues: defaultValuesType = {};
  formConfig.forEach((field) => {
    defaultValues[field.name] = field.value;
  });
  return defaultValues;
};
