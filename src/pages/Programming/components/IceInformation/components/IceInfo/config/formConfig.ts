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
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Inventario",
    validation: {
      type: "number",
      settings: [
        {
          type: "required",
        },
      ],
    },
  },
  {
    name: "produccion",
    label: "Producción",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Producción",
    validation: {
      type: "number",
      settings: [
        {
          type: "required",
        },
      ],
    },
  },
];
