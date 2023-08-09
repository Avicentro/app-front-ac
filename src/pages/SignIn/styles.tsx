import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../constants/constants";

export const SignInWrapper = styled.div`
  display: grid;
  padding: 32px;
  overflow: auto;
  grid-column: 1 / -1;

  .brand-container {
    display: none;
  }
  .form-container {
    form {
      .title {
        font: 600 32px Poppins SemiBold;
        text-align: center;
      }
      .create-account {
        all: unset;
        font: 600 18px Poppins SemiBold;
        color: ${({ theme }) => theme.primary};
        cursor: pointer;
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    padding: 0;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    grid-template-columns: repeat(12, 1fr);
    align-self: center;
    .back-button-container {
      grid-column: 5 / 7;
    }
    .form-container {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      form {
        margin-bottom: 28px;

        .title {
          font: 700 48px Poppins Bold;
          margin: 0 0 38px 0;
        }
        .remember-user {
          display: flex;
          justify-content: space-between;
          margin-bottom: 34px;
          align-items: center;
          p {
            font: 400 18px Poppins Regular;
            color: ${({ theme }) => theme.coolGray600};
          }
        }
        .question {
          margin: 0 0 4px 0;
          font: 400 18px Poppins Regular;
          color: ${({ theme }) => theme.coolGray600};
        }
      }
    }
  }
`;
