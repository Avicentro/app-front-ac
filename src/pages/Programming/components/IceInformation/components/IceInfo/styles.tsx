import styled from "styled-components";

export const IceInfoWrapper = styled.div`
  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &-item {
      font: 400 16px ${({ theme }) => theme.secondaryFontMedium};
      display: flex;
      gap: 4px;
      align-items: center;
      height: 18px;
      p {
        font: 400 16px ${({ theme }) => theme.primaryFontMedium};
      }
    }
    .green {
      color: ${({ theme }) => theme.green500};
      font: 600 16px ${({ theme }) => theme.secondaryFontMedium};
    }
    .red {
      color: ${({ theme }) => theme.red500};
      font: 600 16px ${({ theme }) => theme.secondaryFontMedium};
    }
  }
  .suppliers-container {
    display: grid;
    gap: 8px;
    margin-bottom: 24px;
    .suppliers-title {
      font: 400 20px Signika Medium;
    }
    .third-container {
      display: grid;
      gap: 12px;
      margin-bottom: 12px;
    }
  }
  .suppliers-list {
    .supplier-container {
      list-style: none;
      padding: 0;
      margin: 0;
      .supplier-item {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: space-between;
        p {
          font: 400 16px ${({ theme }) => theme.primaryFontMedium};
        }
        span {
          cursor: pointer;
          svg {
            path {
              color: ${({ theme }) => theme.red500};
              stroke: ${({ theme }) => theme.red500};
            }
          }
        }
      }
    }
  }
  .empty-suppliers {
    font: 12px 400 ${({ theme }) => theme.primaryFontRegular};
    color: ${({ theme }) => theme.coolGray400};
    text-align: center;
  }
`;
