import { IConfig } from "../../../components/form/DynamicForm/models";
import { FEEDBACK_MESSAGES } from "../constants/form";
import { fieldTypeEnum, formConfigType } from "./models";

const shouldNumbersLettersAndOneSpace = /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)?$/;
const shouldNumbersAndLetters = /^[a-zA-Z0-9]$/;
const shouldOnlyLetters = /^[a-zA-Z]+$/;
const shouldOnlyNumbers = /^[0-9]+$/;
const shouldOnlyEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
          regex: shouldOnlyEmail,
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
