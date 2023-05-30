import { FC } from "react";
import Spinner from "../Spinner/Spinner";

// Components

// Styles

import { FullScreenLoaderContainerWrapper } from "./styles";

// helpers

interface FullScreenLoaderContainerProps {}

const FullScreenLoaderContainer: FC<FullScreenLoaderContainerProps> = () => {
  return (
    <FullScreenLoaderContainerWrapper>
      <Spinner />
    </FullScreenLoaderContainerWrapper>
  );
};

export default FullScreenLoaderContainer;
