import styled, { keyframes } from "styled-components";

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const LateralModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  .modal-container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 90%;
    background-color: white;
    z-index: 1000;
    animation: ${slideIn} 0.3s ease-in-out;
  }
  .close-button {
    all: unset;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }
  .children-container {
    padding: 72px 32px;
    height: 100%;
  }
`;
