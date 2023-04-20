import * as Yup from "yup";
import { IConfig } from "../models";

export const createSchemaByConfig: any = (config: IConfig[]) => {
  const yupObjectShape: any = {};
  config?.forEach((element) => {
    if (!element.validation?.type) return;
    yupObjectShape[element.name as keyof typeof yupObjectShape] =
      Yup[element.validation.type]();
    if (element.validation?.settings?.length) {
      element.validation.settings.forEach((validation) => {
        try {
          const { type, message, ...rest } = validation;
          let regex = rest.regex
            ? { ...rest, regex: new RegExp(rest.regex) }
            : { ...rest };
          const contentValidation = Object.values(regex);
          const newMessage =
            message ?? `El campo ${element.label} es requerido`;
          yupObjectShape[element.name] = yupObjectShape[element.name][type](
            ...contentValidation,
            newMessage
          );
        } catch (error) {
          console.error(error);
        }
      });
    }
  });
  return Yup.object().shape(yupObjectShape);
};
