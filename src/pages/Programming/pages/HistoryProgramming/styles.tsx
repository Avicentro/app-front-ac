import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const HistoryProgrammingWrapper = styled.div`
  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .header-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .buttons-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
