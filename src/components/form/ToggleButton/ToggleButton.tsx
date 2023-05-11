import { FC, MouseEvent, useEffect, useState } from "react";

// Components

// Styles
import { ToggleButtonWrapper } from "./styles";

// helpers

interface ToggleButtonProps {
  isActive: boolean;
  handleChange: (isActive: boolean) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ isActive, handleChange }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActive((prev) => {
      handleChange && handleChange(!prev);
      return !prev;
    });
  };

  return (
    <ToggleButtonWrapper active={active} onClick={handleClick} type="button">
      <span className="toggle-switch"></span>
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;
