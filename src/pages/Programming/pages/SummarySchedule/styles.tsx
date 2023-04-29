import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const SummaryScheduleWrapper = styled.div`
  .title {
    margin-bottom: 72px;
    h1 {
      all: unset;
      color: ${({ theme }) => theme.coolGray800};
      font: 700 40px Poppins Bold;
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-column: 3 / 10;
    .schedule-info {
      display: flex;
      gap: 80px;
      margin-bottom: 80px;
      &__text {
        display: flex;
        flex-direction: column;
        &-container {
          display: flex;
          gap: 16px;
          align-items: center;
          white-space: nowrap;
          p {
            all: unset;
          }
          .title {
            font: 700 24px Poppins Bold;
          }
          .content {
            font: 400 20px Poppins Regular;
          }
        }
      }
      &__qr {
        display: flex;
        align-items: center;
        img {
          width: 250px;
          height: 250px;
        }
      }
    }
    .buttons-container {
      display: flex;
      gap: 16px;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
