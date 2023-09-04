import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const EntryTimeWrapper = styled.div`
  .card-entry-time {
    .title {
      margin: 0;
      font: 600 16px ${({ theme }) => theme.primaryFontBold};
    }
    p {
      all: unset;
    }
    .title-entry-time {
      display: flex;
      flex-direction: column;
      gap: 8px;
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
    .card-entry-time {
      .title-entry-time {
        justify-content: space-between;
      }
      .title-entry-date {
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
