export type nameConfigType =
  | "names"
  | "lastNames"
  | "role"
  | "company"
  | "phoneNumber"
  | "documentNumber"
  | "email"
  | "phoneCountry"
  | "password";

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
  date = "date",
}

export type formConfigType = {
  name: nameConfigType;
  label: string;
  validation?: validationType;
  value: any;
  type?: string;
  fieldType: fieldTypeEnum;
};
