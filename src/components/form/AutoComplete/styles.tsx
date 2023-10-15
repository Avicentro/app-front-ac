import styled from "styled-components";

export const AutoCompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
  .label {
    font: 400 14px Work Sans Regular;
    color: ${({ theme }) => theme.coolGray800};
  }
  .select-field-container {
    position: relative;
    div {
      width: 100%;
      input {
        font: 400 14px Work Sans Regular;
        width: 100%;
        color: ${({ theme }) => theme.coolGray800};
        background-color: ${({ theme }) => theme.coolGray200};
        border-radius: 8px;
        cursor: pointer;
        border: none;
        padding: 12px;
        min-height: 20px;
        border: 1px solid ${({ theme }) => theme.coolGray300};
      }
    }
  }
`;
