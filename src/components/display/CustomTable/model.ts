export type columnsHeaderType = {
  Header: string;
  accessor: string;
  type?: string;
  callback?: any;
  content?: string;
};

export type columnsType = {
  Header: string;
  columns: columnsHeaderType[];
};

export type dataType = {
  [s: string]: any;
};

export type pagingType = {
  page: number;
  elements: number;
  total_pages: number;
  total_elements: number;
};

export type actionType = {
  callback: any;
  columnTarget: string;
};

export type actionsToMatchType = {
  [s: string]: actionType;
};

export interface CustomTableProps {
  columns: columnsType[];
  data: dataType[];
  paging?: pagingType;
  loading?: boolean;
}

export interface TableProps extends CustomTableProps {
  setPage: any;
  page: number;
}
