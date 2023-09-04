import { FC, ReactNode } from "react";

// Components

// Styles
import { BorderCardWrapper } from "./styles";

// helpers

interface BorderCardProps {
  children: ReactNode;
}

const BorderCard: FC<BorderCardProps> = ({ children }) => {
  return (
    <BorderCardWrapper className="border-card-container">
      {children}
    </BorderCardWrapper>
  );
};

export default BorderCard;
