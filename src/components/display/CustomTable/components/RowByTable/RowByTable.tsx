import { FC } from "react";
import { getFormat } from "../../../../../pages/Programming/pages/helpers/getFormat";
import { theme } from "../../../../../static/styles/theme";
import Calendar from "../../../../icons/Calendar";
import Delete from "../../../../icons/Delete";
import Edit from "../../../../icons/Edit";

// Components

// Styles

// helpers

import { FlexWrapper, RowByTableWrapper } from "./styles";

interface RowByTableProps {
  column: any;
  content: any;
  original: any;
  indexCell: number;
}

const RowByTable: FC<RowByTableProps> = ({
  column,
  content,
  original,
  indexCell,
}) => {
  const getDataFromRow = () => {
    if (column.columnTarget === "all") {
      return original;
    }
    return original[column.columnTarget];
  };

  const executeAction = () => {
    return column.callback ? column.callback(getDataFromRow()) : null;
  };

  const getIncrementalComponent = () => {
    return (
      <FlexWrapper
        onClick={() => executeAction()}
        hasCallback={!!column.callback}
        color={theme.coolGray700}
      >
        {indexCell + 1}
      </FlexWrapper>
    );
  };

  const getDeleteBlock = () => (
    <FlexWrapper
      onClick={() => executeAction()}
      hasCallback={!!column.callback}
      color={theme.red500}
    >
      <Delete />
    </FlexWrapper>
  );

  const getEditBlock = () => (
    <FlexWrapper
      onClick={() => executeAction()}
      hasCallback={!!column.callback}
      color={theme.green500}
    >
      <Edit />
    </FlexWrapper>
  );

  const getDateField = () => (
    <FlexWrapper
      onClick={() => executeAction()}
      hasCallback={!!column.callback}
      color={theme.primary}
    >
      <Calendar />
      {getFormat(content.props.value)}
    </FlexWrapper>
  );

  const getHtmlField = () => (
    <FlexWrapper
      onClick={() => executeAction()}
      hasCallback={!!column.callback}
      color={theme.coolGray700}
    >
      <div>
        {content.props.value ? (
          <span
            dangerouslySetInnerHTML={{ __html: content.props.value }}
          ></span>
        ) : (
          <>{column.feedback}</>
        )}
      </div>
    </FlexWrapper>
  );

  const getRowByTable = () => {
    const components = {
      incremental: getIncrementalComponent(),
      delete: getDeleteBlock(),
      edit: getEditBlock(),
      date: getDateField(),
      html: getHtmlField(),
    };
    return (
      components[column.type as keyof typeof components] || (
        <FlexWrapper
          onClick={() => executeAction()}
          hasCallback={!!column.callback}
          color={theme.coolGray700}
        >
          {content.props.value ?? <>{column.feedback}</>}
        </FlexWrapper>
      )
    );
  };

  return <RowByTableWrapper>{getRowByTable()}</RowByTableWrapper>;
};

export default RowByTable;
