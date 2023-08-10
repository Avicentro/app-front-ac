import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  p {
    all: unset;
  }
  .flex {
    display: flex;
  }
  .column {
    flex-direction: column;
    gap: 4px;
  }
  .title {
    font: 600 20px Poppins SemiBold;
    color: ${({ theme }) => theme.coolGray700};
  }
  .name-container {
    width: 250px;
  }
  .type-container {
    width: 250px;
  }
  .sub-title {
    font: 400 12px Montserrat Regular;
    color: ${({ theme }) => theme.coolGray400};
  }
  .actions-container {
    display: flex;
  }
  .actions-container {
    gap: 8px;
    align-items: center;

    .action {
      cursor: pointer;
      align-items: center;

      .edit {
        align-items: center;

        color: ${({ theme }) => theme.green500};
        svg {
          path {
            stroke: ${({ theme }) => theme.green500};
            fill: ${({ theme }) => theme.green500};
          }
        }
      }
      .delete {
        align-items: center;

        color: ${({ theme }) => theme.red500};
        svg {
          path {
            stroke: ${({ theme }) => theme.red500};
          }
        }
      }
    }
  }
`;
