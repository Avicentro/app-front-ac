import { fieldTypeEnum, IConfig } from "../../../../../models";

export const formConfig: IConfig[] = [
  {
    name: "date",
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
    name: "availability",
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
    options: [
      {
        label: "Seleccione",
        value: "",
      },
      {
        label: "7:00 p.m",
        value: "2023-04-25 8:00:00",
      },
      {
        label: "7:30 p.m",
        value: "2023-04-25 9:00:00",
      },
      {
        label: "8:00 p.m",
        value: "2023-04-25 10:00:00",
      },
      {
        label: "8:30 p.m",
        value: "2023-04-25 8:00:00",
      },
      {
        label: "9:00 p.m",
        value: "2023-04-25 9:00:00",
      },
      {
        label: "9:30 p.m",
        value: "2023-04-25 8:00:00",
      },
    ],
  },
  {
    name: "idCustomer",
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
        label: "Seleccione",
        value: "",
      },
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
    name: "idSupplier",
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
        label: "Seleccione",
        value: "",
      },
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
    name: "idSubCustomer",
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
        label: "Seleccione",
        value: "",
      },
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
  {
    name: "count",
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
