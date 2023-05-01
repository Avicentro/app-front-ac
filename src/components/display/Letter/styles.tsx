import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../constants/constants";

export const LetterWrapper = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  .letter {
    font: 600 32px Poppins SemiBold;
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
