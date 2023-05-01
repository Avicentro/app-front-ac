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
  justify-content: space-between;
  .brand-container {
    cursor: pointer;
  }
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
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    flex-direction: row;
    height: 96px;
    justify-content: space-between;
    .hamburgerMenu {
      display: none;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
