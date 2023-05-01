import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const TravelProgrammingWrapper = styled.div`
  grid-column: 1/ -1;
  .title-schedule-form {
    text-align: center;
    h1 {
      all: unset;
      font: 700 48px Poppins Bold;
    }
  }
  .buttons-container {
    display: flex;
    gap: 24px;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-column: 2/ 12;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
