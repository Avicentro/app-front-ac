import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../constants/constants";

export const ChangePasswordWrapper = styled.div`
  .back-to-login {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;
