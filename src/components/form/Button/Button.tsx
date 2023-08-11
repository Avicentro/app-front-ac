import { FC } from "react";
import { sizeButtonEnum, typeButtonEnum } from "../../../models";
import { theme } from "../../../static/styles/theme";
import Spinner from "../../feedback/Spinner/Spinner";
import { ButtonProps } from "./model";

// Components

// Styles
import { ButtonWrapper } from "./styles";

// helpers

const Button: FC<ButtonProps> = ({
  mb,
  loading,
  children,
  typeButton = typeButtonEnum.fill,
  extraProps,
  type = "button",
  color = theme.white,
  sizeButton = sizeButtonEnum.medium,
  disabled,
}) => {
  return (
    <ButtonWrapper
      type={type}
      mb={mb}
      typeButton={typeButton}
      color={color}
      {...extraProps}
      sizeButton={sizeButton}
      disabled={disabled || loading}
    >
      {loading ? <Spinner /> : <>{children}</>}
    </ButtonWrapper>
  );
};

export default Button;
