import styled from "styled-components";

export const FilterDropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label {
    font: 400 14px Work Sans Regular;
    color: ${({ theme }) => theme.coolGray800};
  }
  .select-field-container {
    position: relative;
    .content-select-container {
      font: 400 14px Work Sans Regular;
      color: ${({ theme }) => theme.coolGray800};
      background-color: ${({ theme }) => theme.coolGray200};
      border-radius: 8px;
      cursor: pointer;
      border: none;
      padding: 12px;
      min-height: 20px;
      border: 1px solid ${({ theme }) => theme.coolGray300};
    }
    .options-container {
      position: absolute;
      background-color: ${({ theme }) => theme.white};
      width: 100%;
      left: 0;
      z-index: 9999;
      max-height: 300px;
      overflow: auto;
      border: 1px solid ${({ theme }) => theme.coolGray200};
      .option {
        display: flex;
        align-items: center;
        height: 35px;
        cursor: pointer;
        padding: 0 8px;
      }
      .item:hover {
        background-color: ${({ theme }) => theme.coolGray200};
      }
      .filter-input {
        height: 100%;
        padding: 15px;
        input {
          border: 1px solid ${({ theme }) => theme.coolGray300};
          padding: 12px;
          border-radius: 6px;
          width: 100%;
          box-sizing: border-box;
          color: ${({ theme }) => theme.coolGray700};
          font: 400 12px Montserrat Regular;
          background-color: ${({ theme }) => theme.coolGray200};
          height: 38px;
          &:focus {
            box-shadow: 0 0 ${({ theme }) => theme.coolGray300};
            border-color: ${({ theme }) => theme.coolGray300};
            outline: none;
          }
          &::placeholder {
            color: ${({ theme }) => theme.coolGray500};
          }
        }
      }
    }
  }
`;
