import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid ${({ theme }) => theme.primaryLight};
  border-top-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
