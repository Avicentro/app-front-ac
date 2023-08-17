import { columnsType } from "../../../models";

export const COLUMNS_ICE_SUPPLIER: columnsType[] = [
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
        Header: "Peso (kg)",
        accessor: "weight",
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
