import { ROUTES } from "../../../constants/routes";
import { configMenuType } from "./model";

export const configMenu: configMenuType[] = [
  {
    label: "Programación",
    route: ROUTES.PROGRAMMING,
    icon: "programming",
  },
  {
    label: "Usuarios",
    route: ROUTES.USERS,
    icon: "dataBase",
    roles: ["ADMIN"],
  },
  {
    label: "Personas",
    route: ROUTES.PEOPLE,
    icon: "enter",
    roles: ["ADMIN"],
  },
];
