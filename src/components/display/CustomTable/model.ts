import { Dispatch, SetStateAction } from "react";
import { pagingType } from "../../../models";

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
  setPage?: Dispatch<SetStateAction<number>>;
}

export interface TableProps extends CustomTableProps {}
