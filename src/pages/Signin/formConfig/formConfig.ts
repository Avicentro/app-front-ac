import { FEEDBACK_MESSAGES, REGEX_VALIDATION } from "../../../constants/form";
import { fieldTypeEnum, IConfig } from "../../../models";

export const formConfig: IConfig[] = [
  {
    name: "names",
    label: "Nombres",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Nombres",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.FOR_NAME,
          regex: REGEX_VALIDATION.SHOULD_LETTERS_AND_SPACES,
        },
      ],
    },
  },
  {
    name: "surnames",
    label: "Apellidos",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Apellidos",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.FOR_NAME,
          regex: REGEX_VALIDATION.SHOULD_LETTERS_AND_SPACES,
        },
      ],
    },
  },
  {
    name: "email",
    label: "Email",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Email",
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
    name: "cell_phone",
    label: "Número telefónico",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Número telefónico",
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
  {
    name: "password",
    label: "Contraseña",
    value: "",
    type: "password",
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
  {
    name: "role",
    label: "Rol",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Rol",
    validation: {
      type: "number",
      settings: [
        {
          type: "required",
        },
      ],
    },
    options: [
      {
        label: "Seleccione",
        value: "",
      },
      {
        label: "Administrador",
        value: "ADMIN",
      },
    ],
  },
];
