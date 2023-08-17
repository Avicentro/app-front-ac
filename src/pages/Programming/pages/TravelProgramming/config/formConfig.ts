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
  // {
  //   name: "date",
  //   label: "Hora de programación",
  //   value: "",
  //   type: "text",
  //   fieldType: fieldTypeEnum.select,
  //   placeholder: "HH:MM",
  //   validation: {
  //     type: "string",
  //     settings: [
  //       {
  //         type: "required",
  //       },
  //     ],
  //   },
  //   options: [],
  // },
  {
    name: "customer",
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
    name: "supplier",
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
    value: "",
    type: "checkbox",
    fieldType: fieldTypeEnum.checkbox,
    placeholder: "Viaje confirmado",
  },
];
