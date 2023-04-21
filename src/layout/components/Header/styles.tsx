import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../constants/constants";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 12px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  grid-row: 1 / 1;
  .brand-container {
    cursor: pointer;
  }
  .actions-container {
    display: flex;
    align-items: center;
    gap: 44px;
    .bell-icon {
      cursor: pointer;
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(20%, -35%);
        background-color: ${({ theme }) => theme.primary};
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }
    .user-image {
      cursor: pointer;
      img {
        border-radius: 50%;
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    flex-direction: row;
    height: 96px;
    justify-content: space-between;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
