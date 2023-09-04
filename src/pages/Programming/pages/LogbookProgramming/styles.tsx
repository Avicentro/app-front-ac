import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const LogbookProgrammingWrapper = styled.div`
  .buttons-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }
  .items-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .search-by-parameters {
        display: flex;
        gap: 12px;
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
