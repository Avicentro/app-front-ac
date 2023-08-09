import { IConfig } from "../../../../models";

export const mergeDate = (formConfig: IConfig[], date: string) => {
  return formConfig.map((field) => {
    if (field.name === "dateRest") {
      return { ...field, value: date };
    }
    return field;
  });
};
