import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../constants/constants";

export const ProgrammingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 20px;
  .title-container {
    grid-column: 1 / -1;
    display: flex;
  }
  .title {
    margin-bottom: 23px;
    .sub-title {
      margin: 0;
      color: ${({ theme }) => theme.primaryDark};
    }
  }
  .ice-info-container {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .calendar-card {
    grid-column: 1 / -1;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .title-container {
      justify-content: space-between;
      .buttons-container {
        display: flex;
        gap: 12px;
        align-items: center;
      }
    }
    .ice-info-container {
      grid-column: 1 / 5;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .calendar-card {
      grid-column: 5 / -1;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    gap: 20px;
  }
`;
