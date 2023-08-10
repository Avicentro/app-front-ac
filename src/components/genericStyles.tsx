import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../constants/constants";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`;

export const ChildrenContainer = styled.div`
  padding: 54px 16px;
  background-color: ${({ theme }) => theme.coolGray100};
  grid-row: 2 / 3;
  grid-column: auto / span 12;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  overflow: auto;
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-template-columns: repeat(10, 1fr);
    padding: 48px 0;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
  }
`;

export const Container = styled.div`
  padding: 24px 36px 36px;
  grid-column: 1 / -1;
`;

export const Title = styled.h1`
  font: 600 24px Poppins SemiBold;
  color: ${({ theme }) => theme.coolGray700};
  text-align: center;
`;
