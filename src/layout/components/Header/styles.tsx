import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../constants/constants";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.blue};
  height: 120px;
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
  .brand-container {
    cursor: pointer;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
