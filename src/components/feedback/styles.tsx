import styled from "styled-components";

interface ToastWrapperProps {
  status: "success" | "error";
  show: boolean;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: fixed;
  background-color: ${({ theme, status }) =>
    status === "success" ? theme.green500 : theme.red500};
  bottom: -150px;
  right: 3%;
  transform: translateX(-50%);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  animation: ${({ show }) =>
    show ? "toastSlideIn" : "toastSlideOut"}  0.3s ease forwards;
    max-height: 250px;
    overflow: auto;
  p {
    color: #fff;
  }
  .modal-close {
    all: unset;
    position: fixed;
    cursor: pointer;
    top: 0;
    right: 3%;
    display: block;
    margin-top: 5px;
  }
  @keyframes toastSlideIn {
    0% {
      bottom: -150px;
    }
    100% {
      bottom: 20px;
    }
  }
  @keyframes toastSlideOut {
    0% {
      bottom: 20px;
    }
    100% {
      bottom: -150px;
    }
`;