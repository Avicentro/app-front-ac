import { FC, ReactNode } from "react";

// Components

// Styles

// helpers

import { ButtonWrapper } from "./styles";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit";
  mb?: number;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  mb,
  loading,
}) => {
  return (
    <ButtonWrapper type={type} mb={mb}>
      {loading ? <>Cargando...</> : <>{children}</>}
    </ButtonWrapper>
  );
};

export default Button;
