import React, { FC, useState } from "react";
import LoadingContainer from "../../feedback/LoadingContainer/LoadingContainer";
import Spinner from "../../feedback/Spinner/Spinner";
import Table from "./components/Table";
import { CustomTableProps } from "./model";

import { TableWrapper } from "./styles";

const CustomTable: FC<CustomTableProps> = ({
  columns,
  data,
  paging,
  loading,
}) => {
  const [page, setPage] = useState(1);

  const columnsMemo = React.useMemo(() => columns, [columns]);

  return (
    <TableWrapper>
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <Table
          columns={columnsMemo}
          paging={paging}
          data={data}
          page={page}
          setPage={setPage}
        />
      )}
    </TableWrapper>
  );
};

export default CustomTable;
