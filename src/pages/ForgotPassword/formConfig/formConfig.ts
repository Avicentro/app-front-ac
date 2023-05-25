import { FEEDBACK_MESSAGES, REGEX_VALIDATION } from "../../../constants/form";
import { IConfig } from "../../../models";
import { fieldTypeEnum } from "./models";

export const formConfig: IConfig[] = [
  {
    name: "email",
    label: "Ingrese su email",
    value: "",
    type: "text",
    mb: 22,
    fieldType: fieldTypeEnum.text,
    placeholder: "Ingrese su email",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.EMAIL,
          regex: REGEX_VALIDATION.SHOULD_ONLY_EMAIL,
        },
      ],
    },
  },
];
