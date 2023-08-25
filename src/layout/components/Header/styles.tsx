import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../constants/constants";

export const HeaderWrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  gap: 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  grid-row: 1 / 1;
  box-shadow: 0 3px 20px #0000000b;
  justify-content: space-between;
  flex-direction: column;
  .brand-container {
    cursor: pointer;
    .brand-name {
      font: 700 42px Poppins Bold;
      color: ${({ theme }) => theme.primary};
    }
  }
  .buttons-info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .hamburgerMenu {
      background-color: ${({ theme }) => theme.primary};
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        svg {
          width: 24px;
          height: 24px;
          path {
            fill: ${({ theme }) => theme.white};
          }
        }
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
    .buttons-info-container {
      width: auto;
      .hamburgerMenu {
        display: none;
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
