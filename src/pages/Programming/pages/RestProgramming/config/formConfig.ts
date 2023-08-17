import { fieldTypeEnum, IConfig } from "../../../../../models";

export const formConfig: IConfig[] = [
  {
    name: "typeRest",
    label: "Tipo de descanso",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.select,
    placeholder: "Tipo de descanso",
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
        label: "Seleccione la observación",
        value: "",
      },
      {
        label: "Cena",
        value: "cena",
      },
      {
        label: "Refrigerio",
        value: "refrigerio",
      },
    ],
  },
  {
    name: "observation",
    label: "Observación",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.textArea,
    placeholder: "Observación",
  },
];
