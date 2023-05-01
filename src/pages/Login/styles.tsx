import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../constants/constants";

export const LoginWrapper = styled.div`
  display: grid;
  height: 100vh;
  padding: 32px;
  overflow: auto;
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
    .brand-container {
      grid-column: 1 / 7;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 34px;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.primary};
      .name {
        font: 700 56px Poppins Bold;
      }
    }
    .form-container {
      grid-column: 7 / -1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      form {
        width: 428px;
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
