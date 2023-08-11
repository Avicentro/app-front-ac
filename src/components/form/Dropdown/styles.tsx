import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  label {
    font: 400 14px Work Sans Regular;
    /* color: ${({ theme }) => theme.coolGray800}; */
  }
  .select {
    padding: 20px 24px;
    font: 400 14px Work Sans Regular;
    color: ${({ theme }) => theme.coolGray800};
    background-color: ${({ theme }) => theme.coolGray200};
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }
`;
