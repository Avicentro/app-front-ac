import React, { FC } from "react";
import { useTable } from "react-table";

// Model
import { TableProps } from "../model";
import RowByTable from "./RowByTable/RowByTable";

//Styles
import { DetailColumn } from "./styles";

const Table: FC<TableProps> = ({ columns, data, paging, setPage }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(
          (headerGroup: any, index: number) =>
            index > 0 && (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            )
        )}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any, indexCell: number) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <td {...cell.getCellProps()}>
                  <RowByTable
                    column={cell.column}
                    content={cell.render("Cell")}
                    original={row.original}
                    indexCell={indexCell}
                  />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
      {!!paging && (
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td>
              <DetailColumn>
                {[...Array(paging.total_pages)].map((value, idx) => (
                  <button
                    key={`button-${idx}`}
                    onClick={() => setPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
              </DetailColumn>
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default Table;
