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
    name: "people_type",
    label: "Tipo de persona",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Tipo de persona",
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
        label: "Cliente",
        value: "CUSTOMER",
      },
      {
        label: "Sub cliente",
        value: "SUBCUSTOMER",
      },
      {
        label: "Proveedor",
        value: "PROVIDER",
      },
    ],
  },
  {
    name: "document_type",
    label: "Tipo de documento",
    value: "CEDULA CIUDADANIA",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Tipo de documento",
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
        label: "CC",
        value: "CEDULA CIUDADANIA",
      },
      {
        label: "CE",
        value: "CEDULA EXTRANGERA",
      },
      {
        label: "PASSPORT",
        value: "PASSPORT",
      },
      {
        label: "NIT",
        value: "NIT",
      },
    ],
  },
  {
    name: "n_document",
    label: "Número de documento",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Número de documento",
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
    name: "address",
    label: "Dirección",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Dirección",
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
    name: "cellphone",
    label: "Teléfono",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Teléfono",
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
      ],
    },
  },
];
