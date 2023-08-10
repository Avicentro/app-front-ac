import styled from "styled-components";

export const FilterDropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label {
    font: 400 12px Montserrat Regular;
    color: ${({ theme }) => theme.coolGray800};
  }
  .select-field-container {
    position: relative;
    .content-select-container {
      font: 400 12px Montserrat Regular;
      color: ${({ theme }) => theme.coolGray800};
      background-color: ${({ theme }) => theme.coolGray200};
      border-radius: 8px;
      cursor: pointer;
      border: none;
      padding: 12px;
      min-height: 20px;
    }
    .options-container {
      position: absolute;
      background-color: ${({ theme }) => theme.white};
      width: 100%;
      left: 0;
      z-index: 9999;
      max-height: 300px;
      overflow: auto;
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
          padding: 10px 12px;
          font: 400 14px Poppins Regular;
          width: 100%;
        }
      }
    }
  }
`;
