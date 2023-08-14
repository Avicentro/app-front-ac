import { columnsType } from "../../../models";

export const COLUMNS_USER: columnsType[] = [
  {
    Header: "Header",
    columns: [
      {
        Header: "#",
        accessor: " ",
        type: "incremental",
      },
      {
        Header: "Nombre",
        accessor: "name",
        type: "link",
      },
      {
        Header: "Rol",
        accessor: "role",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Editar",
        accessor: "edit",
        type: "edit",
      },
      {
        Header: "Eliminar",
        accessor: "delete",
        type: "delete",
      },
    ],
  },
];
