import styled from "styled-components";

export const DetailColumn = styled.div`
  display: flex;
  text-align: end;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  gap: 7.5px;
  cursor: pointer;
  color: ${({ theme }) => theme.blue};
  font-weight: 600;
`;
