import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../constants/constants";

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  .empty-message-container {
    display: flex;
    width: 100%;
    height: 100px;
    text-align: center;
    background-color: ${({ theme }) => theme.white};
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    .empty-message {
      font: 600 1.25rem Signika SemiBold;
    }
  }
  .create-user-container {
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
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    .create-user-container {
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
