import { IConfig } from "../../../components/form/DynamicForm/models";
import { FEEDBACK_MESSAGES, REGEX_VALIDATION } from "../../../constants/form";
import { fieldTypeEnum } from "./models";

export const formConfig: IConfig[] = [
  {
    name: "email",
    label: "Email",
    value: "",
    type: "text",
    mb: 22,
    fieldType: fieldTypeEnum.text,
    placeholder: "Correo",
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
  {
    name: "password",
    label: "Contraseña",
    value: "",
    type: "password",
    mb: 31,
    fieldType: fieldTypeEnum.text,
    placeholder: "Contraseña",
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
