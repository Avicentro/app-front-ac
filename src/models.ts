export type typeType =
  | "text"
  | "password"
  | "number"
  | "email"
  | "checkbox"
  | "radio";

// ENUMS
export enum typeButtonEnum {
  fill = "fill",
  stroke = "stroke",
  ghost = "ghost",
}

// All about dynamic form
type typeValidationsType = "string" | "number" | "boolean" | "date";

type settingsValidationsStringType =
  | "required"
  | "min"
  | "max"
  | "matches"
  | "email"
  | "min"
  | "url";

type settingsValidationsNumberType =
  | "min"
  | "max"
  | "lessThan"
  | "moreThan"
  | "positive"
  | "negative"
  | "integer"
  | "boolean";

type settingsValidationsDateType = "min" | "max";

type settingsValidationType = {
  type:
    | settingsValidationsStringType
    | settingsValidationsNumberType
    | settingsValidationsDateType;
  message?: string;
  limit?: number;
  regex?: RegExp;
};

type validationType = {
  type?: typeValidationsType;
  settings?: settingsValidationType[];
};

export enum fieldTypeEnum {
  text = "text",
}

export type formConfigType = {
  name: string;
  label: string;
  validation?: validationType;
  value: any;
  mb?: number;
  type: typeType;
  fieldType: fieldTypeEnum;
  placeholder?: any;
};

export interface IConfig extends formConfigType {}

// This is for default values in useForm
export type defaultValuesType = {
  [key: string]: any;
};
