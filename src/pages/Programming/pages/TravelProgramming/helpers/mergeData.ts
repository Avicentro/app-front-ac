import { IConfig } from "../../../../../models";

type dataToMergeType = {
  name: string;
  key: string;
  value: any;
};

export const mergeData = ({
  formConfig,
  dataToMerge,
}: {
  formConfig: IConfig[];
  dataToMerge: dataToMergeType[];
}) => {
  return formConfig.map((field) => {
    const fieldCopy = { ...field };
    const nameMatch = dataToMerge.find((data) => data.name === fieldCopy.name);
    if (nameMatch) {
      fieldCopy[nameMatch.key as keyof typeof fieldCopy] = nameMatch.value;
      return fieldCopy;
    }
    return fieldCopy;
  });
};
