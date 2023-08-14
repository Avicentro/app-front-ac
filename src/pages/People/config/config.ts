import { columnsType } from "../../../models";

export const COLUMNS_PEOPLE: columnsType[] = [
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
        Header: "Teléfono",
        accessor: "cellphone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Tipo",
        accessor: "people_type",
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
