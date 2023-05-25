import { IConfig } from "../../../models";
import { fieldTypeEnum } from "./models";

export const formConfig: IConfig[] = [
  {
    name: "password",
    label: "Ingrese la nueva contraseña",
    value: "",
    type: "password",
    mb: 31,
    fieldType: fieldTypeEnum.text,
    placeholder: "Ingrese la nueva contraseña",
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
