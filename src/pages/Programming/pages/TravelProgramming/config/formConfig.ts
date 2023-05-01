import { fieldTypeEnum, IConfig } from "../../../../../models";

export const formConfig: IConfig[] = [
  {
    name: "dateSelected",
    label: "Fecha",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Fecha de descanso",
    disabled: true,
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
    name: "date",
    label: "Horas de disponibilidad",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Horas de disponibilidad",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
      ],
    },
    options: [],
  },
  {
    name: "Customer",
    label: "Cliente",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Cliente",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
      ],
    },
    options: [],
  },
  {
    name: "Supplier",
    label: "Provedor",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Provedor",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
      ],
    },
    options: [],
  },
  {
    name: "SubCustomer",
    label: "Sub-cliente",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Sub-cliente",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
      ],
    },
    options: [],
  },
  {
    name: "countChickens",
    label: "Cantidad de pollos",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Cantidad de pollos",
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
