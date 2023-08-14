import styled from "styled-components";

export const RowByTableWrapper = styled.div``;

export const DetailColumn = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 7.5px;
  color: ${({ theme }) => theme.secondaryLight};
  font-weight: 600;
  button {
    all: unset;
    cursor: pointer;
  }
`;

export const FlexWrapper = styled.div<{
  gap?: string;
  color?: string;
  hasCallback?: boolean;
}>`
  cursor: ${({ hasCallback }) => (hasCallback ? "pointer" : "auto")};
  border: none !important;
  padding: none;
  gap: ${({ gap }) => gap ?? "10px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ color }) => color ?? "innerit"};
  svg {
    path {
      color: ${({ color }) => color};
      fill: ${({ theme }) => theme.white};
      stroke: ${({ color }) => color};
    }
  }
`;
