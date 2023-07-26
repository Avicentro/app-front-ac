import { ReactNode } from "react";
import { customStyles } from "../../../models";

export interface CardProps {
  children: ReactNode;
  customStyles?: customStyles;
  customClass?: string;
}
