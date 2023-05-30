import {
  FEEDBACK_MESSAGES,
  REGEX_VALIDATION,
} from "../../../../../../../constants/form";
import { fieldTypeEnum, IConfig } from "../../../../../../../models";

export const entryOrderConfig: IConfig[] = [
  {
    name: "countChickensRemissioned",
    label: "Cantidad de pollos remisionados",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Cantidad de pollos remisionados",
    validation: {
      type: "number",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
          regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
        },
      ],
    },
  },
  {
    name: "countChickensSent",
    label: "Cantidad de pollos enviados",
    value: 0,
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Cantidad de pollos enviados",
    validation: {
      type: "number",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
          regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
        },
      ],
    },
  },

  {
    name: "drownedChickens",
    label: "Pollos ahogados",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Pollos ahogados",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
          regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
        },
      ],
    },
  },
  {
    name: "hookStart",
    label: "Gancho inicial",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Gancho inicial",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
          regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
        },
      ],
    },
  },
  {
    name: "operatorHookEmpty",
    label: "Ganchos vacios",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Ganchos vacios",
    validation: {
      type: "string",
      settings: [
        {
          type: "required",
        },
        {
          type: "matches",
          message: FEEDBACK_MESSAGES.ONLY_NUMBERS,
          regex: REGEX_VALIDATION.SHOULD_ONLY_NUMBERS,
        },
      ],
    },
  },

  {
    name: "arrivalTime",
    label: "Hora de llegada",
    value: "",
    type: "date",
    fieldType: fieldTypeEnum.date,
    placeholder: "Hora de llegada",
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
    name: "remarks",
    label: "Observaciones",
    value: "",
    type: "text",
    fieldType: fieldTypeEnum.text,
    placeholder: "Observaciones",
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
