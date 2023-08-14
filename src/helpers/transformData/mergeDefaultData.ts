import { formConfigType } from "../../models";

export const mergeDefaultData = (
  formConfig: formConfigType[],
  dataToMerge: any
) => {
  return formConfig.map((field: any) => ({
    ...field,
    value: dataToMerge[field.name],
  }));
};
