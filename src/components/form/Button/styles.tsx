import styled from "styled-components";

interface ButtonWrapperType {
  color?: string;
  bgColor?: string;
  mb?: number;
}

export const ButtonWrapper = styled.button<ButtonWrapperType>`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: ${({ theme, color }) => color ?? theme.white};
  background-color: ${({ theme, bgColor }) => bgColor ?? theme.primary};
  border-radius: 16px;
  min-height: 72px;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  cursor: pointer;
`;
