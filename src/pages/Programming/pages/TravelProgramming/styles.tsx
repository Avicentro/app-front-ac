import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const TravelProgrammingWrapper = styled.div`
  grid-column: 1/ -1;
  .card-travel {
    padding: 30px;
  }
  .title-schedule-form {
    text-align: center;
    h1 {
      all: unset;
      font: 700 48px Poppins Bold;
    }
  }
  .buttons-container-travel {
    display: flex;
    gap: 24px;
    min-width: 200px;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-column: 2/ 10;
    .buttons-container-travel {
      max-width: 400px;
      margin: 0 auto;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
