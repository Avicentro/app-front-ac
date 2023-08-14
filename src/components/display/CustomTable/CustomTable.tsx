import React, { FC, useState } from 'react';
import Table from './components/Table';
import { CustomTableProps } from './model';

import { TableWrapper } from './styles';

const CustomTable: FC<CustomTableProps> = ({ columns, data, paging }) => {
  const [page, setPage] = useState(1);

  const columnsMemo = React.useMemo(() => columns, [columns]);

  return (
    <TableWrapper>
      <Table
        columns={columnsMemo}
        paging={paging}
        data={data}
        page={page}
        setPage={setPage}
      />
    </TableWrapper>
  );
};

export default CustomTable;
