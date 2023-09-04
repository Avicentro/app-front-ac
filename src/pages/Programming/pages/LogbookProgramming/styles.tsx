import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const LogbookProgrammingWrapper = styled.div`
  .buttons-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    gap: 8px;
    .search-all-container {
      width: 100%;
    }
    .search-by-parameters {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      button {
        width: 100%;
      }
    }
  }
  .items-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .empty-container {
      width: 100%;
      height: 120px;
      display: grid;
      place-items: center;
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .search-all-container {
        max-width: 220px;
      }
      .search-by-parameters {
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 12px;
        button {
          max-width: 150px;
        }
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
