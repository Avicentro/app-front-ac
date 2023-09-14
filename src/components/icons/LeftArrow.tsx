import { FC } from "react";
import { IconsProps } from "./model";

// Components

// Styles

// helpers

const LeftArrow: FC<IconsProps> = ({
  width = 24,
  height = 24,
  fill = "#000000",
}) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="-8.5 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path>{" "}
    </svg>
  );
};

export default LeftArrow;
