import { columnsType, actionsToMatchType } from '../model';

export const getColumnsWithCallbacks = (
  columns: columnsType[],
  actionsToMatch: actionsToMatchType
) => {
  const columnsCopy = [...columns];
  const newColumns = columns[0].columns.map((column) => {
    if (actionsToMatch[column.accessor]) {
      return {
        ...column,
        callback: actionsToMatch[column.accessor].callback,
        columnTarget: actionsToMatch[column.accessor].columnTarget,
      };
    }
    return { ...column };
  });
  columnsCopy[0].columns = newColumns;
  return columnsCopy;
};
