import { FC } from "react";
import { CardProps } from "./model";

// Components

// Styles
import { CardWrapper } from "./styles";

// helpers

const Card: FC<CardProps> = ({ children, customStyles, customClass }) => {
  return (
    <CardWrapper style={customStyles} className={customClass}>
      {children}
    </CardWrapper>
  );
};

export default Card;
