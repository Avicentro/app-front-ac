import styled from "styled-components";

interface TextInputWrapperProps {
  error?: boolean;
  mb?: number;
}

export const TextInputWrapper = styled.div<TextInputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  p {
    all: unset;
  }
  input {
    border: 1px solid
      ${({ theme, error }) => (error ? theme.red500 : theme.coolGray300)};
    padding: 12px;
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme, error }) => (error ? theme.red500 : theme.coolGray700)};
    font: 400 12px Poppins Regular;
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
