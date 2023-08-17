import {
  FEEDBACK_MESSAGES,
  REGEX_VALIDATION,
} from "../../../../../constants/form";
import { fieldTypeEnum, IConfig } from "../../../../../models";

export const formConfig: IConfig[] = [
  {
    name: "name",
    label: "Nombre",
    value: "",
    type: "text",
    mb: 22,
    fieldType: fieldTypeEnum.text,
    placeholder: "Nombre",
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
    name: "weight",
    label: "Peso",
    value: "",
    type: "number",
    mb: 22,
    fieldType: fieldTypeEnum.text,
    placeholder: "Peso",
    validation: {
      type: "number",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
          regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
        },
      ],
    },
  },
];
