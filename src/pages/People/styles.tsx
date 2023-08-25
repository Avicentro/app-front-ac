import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../constants/constants";

export const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  .create-people-container {
    width: 70%;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    button {
      width: 100%;
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    .create-people-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: relative;
      button {
        width: 230px;
      }
    }
  }
`;
