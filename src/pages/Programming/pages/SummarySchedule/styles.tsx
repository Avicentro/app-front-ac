import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const SummaryScheduleWrapper = styled.div`
  grid-column: 1 / -1;
  .title {
    margin-bottom: 72px;
    text-align: center;
    h1 {
      all: unset;
      color: ${({ theme }) => theme.coolGray800};
      font: 700 40px Poppins Bold;
    }
  }

  .schedule-info {
    display: flex;
    justify-content: center;
    gap: 80px;
    flex-direction: column;
    margin-bottom: 80px;
    &__text {
      display: flex;
      flex-direction: column;
      gap: 20px;
      &-container {
        display: flex;
        gap: 16px;
        align-items: left;
        white-space: nowrap;
        flex-direction: column;
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
      justify-content: center;
      img {
        width: 250px;
        height: 250px;
      }
    }
  }
  .buttons-container {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-column: 2 / 12;
    .header-container {
      display: flex;
      justify-content: space-between;
      button {
        width: 200px;
      }
    }
    .schedule-info {
      flex-direction: row;
    }
    .buttons-container {
      display: flex;
      gap: 16px;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    .schedule-info {
      &__text {
        &-container {
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
`;
