import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  .button-modify-container {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    gap: 12px;
    justify-content: right;
  }

  .travels-count {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 16px;
    h2 {
      font-size: 20px;
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .button-modify-container {
      > button {
        width: 300px;
        float: right;
      }
    }

    .travels-count {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;

export const CustomCalendarWrapper = styled.div`
  .fc-header-toolbar {
    display: flex;
    flex-direction: column;
  }
  .fc-event {
    background-color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.secondary};
  }
  .fc-toolbar-title {
    font: 600 20px ${({ theme }) => theme.primaryFontRegular};
    margin-bottom: 14px;
  }
  .fc-divider {
    border-color: ${({ theme }) => theme.coolGray300};
  }
  .fc-col-header-cell {
    height: 48px;
    font: 600 14px ${({ theme }) => theme.primaryFontRegular};
    color: ${({ theme }) => theme.coolGray500};
  }
  .fc-day {
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.red200};
    }
  }
  .fc-daygrid-day-number {
    font: 600 14px ${({ theme }) => theme.primaryFontRegular};
    color: ${({ theme }) => theme.coolGray500};
  }
  .fc-button-group {
    .fc-button {
      background-color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }

  .fc-event-title-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding-left: 5px;
    .fc-event-title.fc-sticky {
      display: flex;
      align-content: center;
      padding-left: 5px;
      height: 15px;
    }
  }

  .fc-event-main-frame {
    .fc-event-time {
      display: none !important;
    }
  }
  .fc-daygrid-event-harness {
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 8px;
    margin-bottom: 4px;

    a {
      .fc-daygrid-event-dot {
        border-color: ${({ theme }) => theme.white};
      }
      .fc-event-time {
        color: ${({ theme }) => theme.white};
      }
      .fc-event-title {
        color: ${({ theme }) => theme.white};
        font: 400 13px Poppins Regular;
      }
    }
  }
  .fc-timegrid-event-harness {
    .bar {
      &-rest {
        background-color: ${({ theme }) => theme.yellow400};
        border: 1px solid ${({ theme }) => theme.coolGray800};
        .fc-event-main {
          color: ${({ theme }) => theme.coolGray800};
        }
      }
      &-travel {
        background-color: ${({ theme }) => theme.white};
        border: 1px solid ${({ theme }) => theme.coolGray800};
        .fc-event-main {
          color: ${({ theme }) => theme.coolGray800};
        }
      }
    }
  }
  .fc-timegrid-slots {
    table {
      tbody {
        tr {
          height: 5px !important;
        }
        tr:nth-child(n+130):nth-child(-n+190) {
            display: none;
          }

          tr:nth-child(191) {
            border-top: 3px solid ${({ theme }) => theme.primary};
          }
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .fc-header-toolbar {
      flex-direction: row;
    }
  }

  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
    .fc-toolbar-title {
      font: 600 32px ${({ theme }) => theme.primaryFontRegular};
    }
  }
`;
