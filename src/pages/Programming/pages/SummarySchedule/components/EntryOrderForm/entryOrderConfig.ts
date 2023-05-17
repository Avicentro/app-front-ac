import {
  FEEDBACK_MESSAGES,
  REGEX_VALIDATION,
} from "../../../../../../constants/form";
import { fieldTypeEnum, IConfig } from "../../../../../../models";

export const entryOrderConfig: IConfig[] = [
  {
    name: "chickensBasket",
    label: "Pollos en canasta",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Pollos en canasta",
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
    name: "basket",
    label: "Canasta",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Canasta",
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
    name: "goodChickens",
    label: "Pollos sanos",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Pollos sanos",
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
    name: "operatorEndHook",
    label: "Gancho final",
    value: "",
    type: "number",
    fieldType: fieldTypeEnum.text,
    placeholder: "Gancho final",
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
        {
          type: "matches",
          regex: REGEX_VALIDATION.SHOULD_LETTERS_NUMBERS_SPACES,
        },
      ],
    },
  },
];
