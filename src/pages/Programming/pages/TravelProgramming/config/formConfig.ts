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
      type: "date",
      settings: [
        {
          type: "required",
        },
      ],
    },
  },
];
