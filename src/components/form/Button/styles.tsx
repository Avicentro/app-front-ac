import styled from "styled-components";
import { typeButtonEnum } from "../../../models";
import { ButtonWrapperProps } from "./model";

const getBgByTypeButton = ({
  bgColor,
  theme,
  typeButton = typeButtonEnum.fill,
}: {
  bgColor?: string;
  theme: any;
  typeButton?: typeButtonEnum;
}) => {
  const TYPE_BUTTON = {
    fill: bgColor ?? theme.primary,
    stroke: theme.white,
    ghost: theme.white,
  };
  return TYPE_BUTTON[typeButton];
};

const getBorderByTypeButton = ({
  bgColor,
  theme,
  typeButton = typeButtonEnum.fill,
}: {
  bgColor?: string;
  theme: any;
  typeButton?: typeButtonEnum;
}) => {
  const TYPE_BUTTON = {
    fill: bgColor ?? theme.primary,
    stroke: bgColor ?? theme.primary,
    ghost: "none",
  };
  return TYPE_BUTTON[typeButton];
};

const getColorByTypeButton = ({
  color,
  theme,
  typeButton = typeButtonEnum.fill,
}: {
  color?: string;
  theme: any;
  typeButton?: typeButtonEnum;
}) => {
  const TYPE_BUTTON = {
    fill: color ?? theme.white,
    stroke: theme.coolGray600,
    ghost: theme.coolGray600,
  };
  return TYPE_BUTTON[typeButton];
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: ${({ sizeButton }) => `${sizeButton}px`};
  text-align: center;
  color: ${({ theme, color, typeButton }) =>
    getColorByTypeButton({
      color,
      theme,
      typeButton,
    })};
  background-color: ${({ theme, bgColor, typeButton }) =>
    getBgByTypeButton({
      bgColor,
      theme,
      typeButton,
    })};
  border-radius: 16px;
  border: 1px solid
    ${({ theme, bgColor, typeButton }) =>
      getBorderByTypeButton({
        bgColor,
        theme,
        typeButton,
      })};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  cursor: pointer;
`;
