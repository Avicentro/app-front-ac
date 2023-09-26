import { fieldTypeEnum, IConfig } from "../../../../../models";

export const formConfig: IConfig[] = [
  {
    name: "date",
    label: "Hora seleccionada",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "HH:MM",
    disabled: false,
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
    name: "customer",
    label: "Cliente",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.filterText,
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
    name: "supplier",
    label: "Proveedor",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.filterText,
    placeholder: "Proveedor",
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
  {
    name: "observation",
    label: "Observaciones",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.textArea,
    placeholder: "Observaciones",
  },
  {
    name: "confirmed",
    label: "Viaje confirmado",
    value: false,
    type: "checkbox",
    fieldType: fieldTypeEnum.checkbox,
    placeholder: "Viaje confirmado",
  },
];
