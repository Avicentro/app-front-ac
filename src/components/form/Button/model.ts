import { ReactNode } from "react";
import { sizeButtonEnum, typeButtonEnum } from "../../../models";

export interface ButtonWrapperProps {
  color?: string;
  bgColor?: string;
  mb?: number;
  typeButton?: typeButtonEnum;
  sizeButton?: sizeButtonEnum;
}

export interface ButtonProps extends ButtonWrapperProps {
  children: ReactNode;
  type?: "button" | "submit";
  loading?: boolean;
  extraProps?: any;
}
