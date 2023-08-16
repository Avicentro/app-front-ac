import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../constants/constants";

export const IceProvidersWrapper = styled.div`
  grid-column: 2 / 12;
  min-height: 100%;
  .card-ice-providers {
    height: 100%;
    .create-provider-container {
      width: 70%;
      display: flex;
      justify-content: flex-end;
      position: fixed;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
      button {
        width: 100%;
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    .card-ice-providers {
      .create-provider-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        position: relative;
        button {
          width: 240px;
        }
      }
    }
  }
`;
