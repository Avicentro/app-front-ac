import styled from "styled-components";

interface TextInputWrapperProps {
  error?: boolean;
  mb?: number;
}

export const TextInputWrapper = styled.div<TextInputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  input {
    border: 1px solid
      ${({ theme, error }) => (error ? theme.red500 : theme.coolGray300)};
    padding: 12px;
    border-radius: 18px;
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme, error }) => (error ? theme.red500 : theme.coolGray700)};
    font: 400 16px Poppins Regular;
    background-color: ${({ theme }) => theme.coolGray200};
    height: 64px;
    &:focus {
      box-shadow: 0 0
        ${({ theme, error }) =>
          error ? `5px ${theme.red500}` : `2px ${theme.coolGray300}`};
      border-color: ${({ theme, error }) =>
        error ? theme.red500 : theme.coolGray300};
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.coolGray500};
    }
  }
`;
