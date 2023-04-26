import { FC } from "react";
import { theme } from "../../../static/styles/theme";
import { ButtonProps } from "./model";

// Components

// Styles
import { ButtonWrapper } from "./styles";

// helpers

const Button: FC<ButtonProps> = ({
  mb,
  loading,
  children,
  typeButton,
  extraProps,
  type = "button",
  color = theme.white,
}) => {
  return (
    <ButtonWrapper
      type={type}
      mb={mb}
      typeButton={typeButton}
      color={color}
      {...extraProps}
    >
      {loading ? <>Cargando...</> : <>{children}</>}
    </ButtonWrapper>
  );
};

export default Button;
