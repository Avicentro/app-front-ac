import styled from "styled-components";

interface ToggleButtonWrapperProps {
  active: boolean;
}

export const ToggleButtonWrapper = styled.button<ToggleButtonWrapperProps>`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  background-color: ${({ theme, active }) =>
    active ? theme.primary : theme.white};

  .toggle-switch {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 28px;
    height: 28px;
    border-radius: 18px;
    background-color: ${({ theme, active }) =>
      active ? theme.white : theme.primary};
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    transform: ${({ active }) => (active ? "translateX(32px)" : "")};
  }
`;
