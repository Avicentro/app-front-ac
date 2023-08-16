import { FC } from "react";

interface IceProps {
  width?: number;
  height?: number;
}
const Ice: FC<IceProps> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 17L9 20M12 17L15 20M12 17V12M12 17V21M12 7L9 4M12 7L15 4M12 7V12M12 7V3M12 12L7.66989 9.50001M12 12L16.3301 14.5M12 12L7.66988 14.4999M12 12L16.3301 9.49995M16.3301 14.5L17.4282 18.5981M16.3301 14.5L20.4282 13.4019M16.3301 14.5L19.7942 16.5M7.66989 9.50001L3.57181 10.5981M7.66989 9.50001L6.57181 5.40193M7.66989 9.50001L4.20578 7.5M16.3301 9.49995L20.4282 10.598M16.3301 9.49995L17.4282 5.40187M16.3301 9.49995L19.7943 7.5M7.66988 14.4999L6.57181 18.598M7.66988 14.4999L3.57181 13.4019M7.66988 14.4999L4.20584 16.5"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Ice;
