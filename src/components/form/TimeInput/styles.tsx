import styled from "styled-components";

interface TimeInputWrapperProps {
  error?: boolean;
  mb?: number;
}

export const TimeInputWrapper = styled.div<TimeInputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  .label {
    all: unset;
    font: 400 14px Work Sans Regular;
  }
  input {
    border: 1px solid
      ${({ theme, error }) => (error ? theme.red500 : theme.coolGray300)};
    padding: 12px;
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme, error }) => (error ? theme.red500 : theme.coolGray700)};
    font: 400 14px Work Sans Regular;
    background-color: ${({ theme }) => theme.coolGray200};
    height: 38px;
    &:focus {
      box-shadow: 0 0
        ${({ theme, error }) =>
          error ? `5px ${theme.red500}` : `8px ${theme.coolGray300}`};
      border-color: ${({ theme, error }) =>
        error ? theme.red500 : theme.coolGray300};
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.coolGray500};
    }
  }
`;
