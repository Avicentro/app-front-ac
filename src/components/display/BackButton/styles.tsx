import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../constants/constants";

export const BackButtonWrapper = styled.div`
  margin-bottom: 32px;
  max-width: 100%;
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    max-width: 160px;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
