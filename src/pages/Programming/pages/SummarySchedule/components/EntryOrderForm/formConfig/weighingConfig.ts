import {
  FEEDBACK_MESSAGES,
  REGEX_VALIDATION,
} from "../../../../../../../constants/form";
import { fieldTypeEnum, IConfig } from "../../../../../../../models";

export const weighingConfig: IConfig[] = [
  {
    name: "grossWeight",
    label: "Bruto",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Bruto",
    validation: {
      type: "string",
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
