import { FC } from "react";
import BorderCard from "../../../../../../components/display/BorderCard/BorderCard";
import Calendar from "../../../../../../components/icons/Calendar";
import { getFormat } from "../../../helpers/getFormat";

// Components

// Styles
import { LogbookHtmlWrapper } from "./styles";

// helpers

interface LogbookHtmlProps {
  html: string;
  date: string;
}

const LogbookHtml: FC<LogbookHtmlProps> = ({ html, date }) => {
  return (
    <BorderCard>
      <LogbookHtmlWrapper>
        <div className="header-container">
          <span className="calendar-container">
            <Calendar width={12} height={12} />
            {getFormat(date, true)}
          </span>
        </div>
        <span
          className="html-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></span>
      </LogbookHtmlWrapper>
    </BorderCard>
  );
};

export default LogbookHtml;
