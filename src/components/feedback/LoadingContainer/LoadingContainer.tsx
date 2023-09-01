import { FC, ReactNode } from "react";

// Components

// Styles
import { LoadingContainerWrapper } from "./styles";

// helpers

interface LoadingContainerProps {
  children: ReactNode;
}

const LoadingContainer: FC<LoadingContainerProps> = ({ children }) => {
  return <LoadingContainerWrapper>{children}</LoadingContainerWrapper>;
};

export default LoadingContainer;
