import { IConfig } from "../../../../../../../models";

export const mergeNumberOfBaskets = ({
  formConfig,
  countChickens,
}: {
  formConfig: IConfig[];
  countChickens: number;
}): IConfig[] => {
  return formConfig.map((field) => {
    if (field.name === "basket") {
      return { ...field, value: Math.ceil(countChickens / 8) };
    }
    return field;
  });
};
