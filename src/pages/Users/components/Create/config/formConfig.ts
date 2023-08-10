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
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.ONLY_LETTERS,
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
    mb: 22,
    fieldType: fieldTypeEnum.text,
    placeholder: "Email",
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
    name: "password",
    label: "Contraseña",
    value: "",
    type: "password",
    mb: 22,
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
    type: "password",
    mb: 22,
    fieldType: fieldTypeEnum.select,
    placeholder: "Rol",
    validation: {
      type: "string",
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
      {
        label: "Comercial",
        value: "COM",
      },
      {
        label: "Despacho",
        value: "DES",
      },
      {
        label: "Veterinario",
        value: "VET",
      },
    ],
  },
];
