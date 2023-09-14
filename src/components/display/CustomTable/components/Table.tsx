import { FC } from "react";
import { useTable } from "react-table";

// Components
import Spinner from "../../../feedback/Spinner/Spinner";
import LoadingContainer from "../../../feedback/LoadingContainer/LoadingContainer";

// Model
import { TableProps } from "../model";
import RowByTable from "./RowByTable/RowByTable";
import Footer from "./components/Footer/Footer";

//Styles

const Table: FC<TableProps> = ({ columns, data, paging, setPage, loading }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const numberOfColumns = columns[0]?.columns?.length + 1;

  return (
    <>
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
          {loading ? (
            <tr>
              <th className="loading" colSpan={numberOfColumns}>
                <LoadingContainer>
                  <Spinner />
                </LoadingContainer>
              </th>
            </tr>
          ) : (
            <>
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
            </>
          )}
        </tbody>
      </table>
      <Footer paging={paging} setPage={setPage} />
    </>
  );
};

export default Table;
