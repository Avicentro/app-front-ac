import { columnsType } from "../../../../../models";

export const COLUMNS_SCHEDULE: columnsType[] = [
  {
    Header: "Header",
    columns: [
      {
        Header: "#",
        accessor: " ",
        type: "incremental",
      },
      {
        Header: "Fecha",
        accessor: "dateStart",
        type: "date",
      },
      {
        Header: "Cliente",
        accessor: "customer.name",
        feedback: "Cliente eliminado",
      },
      {
        Header: "Proveedor",
        accessor: "supplier.name",
        feedback: "Proveedor eliminado",
      },
      {
        Header: "Cantidad de pollos",
        accessor: "countChickens",
      },
      {
        Header: "Observaciones",
        accessor: "observation",
        type: "html",
        feedback: "Sin observaciones",
      },
    ],
  },
];
