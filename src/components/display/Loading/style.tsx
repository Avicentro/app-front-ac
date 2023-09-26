import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color:#ffffff;
  z-index: 999;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  .icon-animate {
    height: 50%;
  }
`;
