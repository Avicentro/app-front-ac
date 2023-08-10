import { ROUTES } from "../../../constants/routes";
import { configMenuType } from "./model";

export const configMenu: configMenuType[] = [
  {
    label: "Programación",
    route: ROUTES.PROGRAMMING,
    icon: "programming",
  },
  {
    label: "Crear usuario",
    route: ROUTES.SIGN_IN,
    icon: "dataBase",
    roles: ["ADMIN"],
  },
  {
    label: "Personas",
    route: ROUTES.PEOPLE,
    icon: "enter",
    roles: ["ADMIN"],
  },
  // {
  //   label: "Salida",
  //   route: ROUTES.PROGRAMMING,
  //   icon: "out",
  // },
  // {
  //   label: "Datos",
  //   route: ROUTES.PROGRAMMING,
  //   icon: "dataBase",
  // },
];
