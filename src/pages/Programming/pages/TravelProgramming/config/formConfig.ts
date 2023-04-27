import { fieldTypeEnum, IConfig } from "../../../../../models";

export const formConfig: IConfig[] = [
  {
    name: "dateRest",
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
    name: "client",
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
    options: [
      {
        label: "Cliente 1",
        value: "Cliente 1",
      },
      {
        label: "Cliente 2",
        value: "Cliente 2",
      },
      {
        label: "Cliente 3",
        value: "Cliente 3",
      },
    ],
  },
  {
    name: "provider",
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
    options: [
      {
        label: "Provedor 1",
        value: "Provedor 1",
      },
      {
        label: "Provedor 2",
        value: "Provedor 2",
      },
      {
        label: "Provedor 3",
        value: "Provedor 3",
      },
    ],
  },
  {
    name: "subClient",
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
    options: [
      {
        label: "Sub-Cliente 1",
        value: "Sub-Cliente 1",
      },
      {
        label: "Sub-Cliente 2",
        value: "Sub-Cliente 2",
      },
      {
        label: "Sub-Cliente 3",
        value: "Sub-Cliente 3",
      },
    ],
  },
];
