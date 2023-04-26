import { IConfig } from "../../../models";

export interface DynamicFormWrapperProps {
  numberOfColumns?: number;
}

export interface DynamicFormProps extends DynamicFormWrapperProps {
  formConfig: IConfig[];
  errors: any;
  setValue: (nameOfField: string, valueForChange: any) => any;
  control: any;
  mb?: number;
}
