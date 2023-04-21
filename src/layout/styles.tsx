import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../constants/constants";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 96px calc(100vh - 80px);
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 96px calc(100vh - 80px);
  }

  // Custom styles
  .flex {
    display: flex;
  }
  .gap8 {
    gap: 8;
  }
  .gap12 {
    gap: 12;
  }
  .gap16 {
    gap: 16;
  }
  .gap20 {
    gap: 20;
  }
  .gap24 {
    gap: 24;
  }
  .gap32 {
    gap: 32;
  }
  .align-center {
    text-align: center;
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-around {
    justify-content: space-around;
  }
`;
