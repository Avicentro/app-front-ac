import {
  FEEDBACK_MESSAGES,
  REGEX_VALIDATION,
} from "../../../../../../../constants/form";
import { fieldTypeEnum, IConfig } from "../../../../../../../models";

export const formConfig: IConfig[] = [
  {
    name: "inventory",
    label: "Inventario",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Inventario",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
      ],
    },
  },
  {
    name: "production",
    label: "Producción",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Producción",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
      ],
    },
  },
];
