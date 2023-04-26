import { ReactNode } from "react";
import { typeButtonEnum } from "../../../models";

export interface ButtonWrapperProps {
  color?: string;
  bgColor?: string;
  mb?: number;
  typeButton?: typeButtonEnum;
}

export interface ButtonProps extends ButtonWrapperProps {
  children: ReactNode;
  type?: "button" | "submit";
  loading?: boolean;
  extraProps?: any;
}
