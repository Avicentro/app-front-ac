import { FC } from "react";
import { IconsProps } from "./model";

// Components

// Styles

// helpers

const RightArrow: FC<IconsProps> = ({
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
      <path d="M7.75 16.063l-7.688-7.688 3.719-3.594 11.063 11.094-11.344 11.313-3.5-3.469z"></path>{" "}
    </svg>
  );
};

export default RightArrow;
