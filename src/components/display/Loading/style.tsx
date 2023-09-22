import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @keyframes slide-down {
    from {
      top: -10%;
    }
    to {
      top: 15%;
    }
  }

  @keyframes slide-up {
    from {
      top: 15%;
    }
    to {
      top: -100%;
    }
  }

  .modal {
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 600px;
    background-color: #fff;
    z-index: 1000;
    padding: 30px 15px;
    transition: top 0.2s ease-out;
    border-radius: 4px;
    overflow: auto;
    max-height: 550px;
    &-title {
      text-align: center;
      font: 600 32px Work Sans Regular;
      h2 {
        margin: 0;
      }
    }
  }

  .--slide-down {
    animation: slide-down 0.3s ease-out;
  }

  .--slide-up {
    animation: slide-up 0.3s ease-out;
  }

  .modal-content {
    padding: 20px;
  }

  .modal-close {
    all: unset;
    position: fixed;
    cursor: pointer;
    top: 0;
    right: 3%;
    display: block;
    margin-top: 20px;
  }
`;
