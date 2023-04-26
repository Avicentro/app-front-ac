import { IConfig } from "../../../../../models";
import { fieldTypeEnum } from "../../../../Login/fotmConfig/models";

export const formConfig: IConfig[] = [
  {
    name: "dateRest",
    label: "Fecha",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Fecha de descanso",
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
