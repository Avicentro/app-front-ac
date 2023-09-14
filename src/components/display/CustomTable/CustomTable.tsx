import React, { FC } from "react";
import Table from "./components/Table";
import { CustomTableProps } from "./model";

import { TableWrapper } from "./styles";

const CustomTable: FC<CustomTableProps> = ({
  columns,
  data,
  loading,
  paging,
  setPage,
}) => {
  const columnsMemo = React.useMemo(() => columns, [columns]);

  return (
    <TableWrapper>
      <Table
        columns={columnsMemo}
        paging={paging}
        data={data}
        setPage={setPage}
        loading={loading}
      />
    </TableWrapper>
  );
};

export default CustomTable;
