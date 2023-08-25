import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const EntryTimeWrapper = styled.div`
  .card-entry-time {
    .title-entry-time {
      display: flex;
      flex-direction: column;
      gap: 8px;
      h3 {
        margin: 0;
        font: 600 20px ${({ theme }) => theme.primaryFontBold};
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    .button-container {
      width: 100%;
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .title-entry-time {
      flex-direction: row;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
