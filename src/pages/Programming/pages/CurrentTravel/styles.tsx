import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const CurrentTravelWrapper = styled.div`
  .buttons-container {
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
  }
  .form-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 32px;
    button {
      align-self: center;
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .buttons-container {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
