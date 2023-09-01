export type typeType =
  | "text"
  | "password"
  | "number"
  | "email"
  | "checkbox"
  | "radio"
  | "date";

// ENUMS
export enum typeButtonEnum {
  fill = "fill",
  stroke = "stroke",
  ghost = "ghost",
}

// All about dynamic form
export type typeValidationsType = "string" | "number" | "boolean" | "date";

export type settingsValidationsStringType =
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
  select = "select",
  checkbox = "checkbox",
  textArea = "textArea",
}

export type optionsType = {
  label: string | number;
  value: any;
};

export type formConfigType = {
  name: string;
  label?: string;
  validation?: validationType;
  value: any;
  mb?: number;
  type: typeType;
  fieldType: fieldTypeEnum;
  placeholder: number | string;
  disabled?: boolean;
  options?: optionsType[];
};

export interface IConfig extends formConfigType {}

// This is for default values in useForm
export type defaultValuesType = {
  [key: string]: any;
};

// TEXT INPUT
export interface TextInputProps {
  type?: typeType;
  name: string;
  value: any;
  placeholder?: string | number;
  handleChange?: (s: any) => any;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  size?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  form?: string;
  otherProps?: any;
  label?: string;
  error?: boolean;
  errorMessage?: any;
  mb?: number;
}

// BUTTON:
export enum sizeButtonEnum {
  small = 32,
  medium = 40,
  big = 48,
  extraBig = 72,
}

export type scheduleType = {
  dateStart: string;
  dateEnd: string;
  supplier: string;
  customer: string;
  subCustomer: string;
  countChickens: number;
  remarks: string;
  code: number;
  driver: string;
  typeSchedule: string;
};

export type customStyles = {
  [key: string]: string | number;
};

// CUSTOM TABLE
export type columnsHeaderType = {
  Header: string;
  accessor: string;
  type?: "incremental" | "edit" | "delete" | "link" | "html" | "date";
  callback?: any;
  content?: string;
  feedback?: string; // Representa el contenido por defecto, de no existir contenido en la celda
};

export type columnsType = {
  Header: string;
  columns: columnsHeaderType[];
};
