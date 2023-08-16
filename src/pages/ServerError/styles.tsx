import styled from "styled-components";

export const ServerErrorWrapper = styled.div`
  grid-column: 2 / 10;
  font: 400 20px ${({ theme }) => theme.primaryFontRegular};
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  width: 100%;
  height: 100px;
  padding: 24px;
  display: grid;
  place-items: center;
`;
