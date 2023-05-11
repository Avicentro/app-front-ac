import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../constants/constants";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  .button-modify-container {
    width: 100%;
    margin-bottom: 24px;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .button-modify-container {
      > button {
        width: 300px;
        float: right;
      }
    }
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;

export const CustomCalendarWrapper = styled.div`
  .fc-event {
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
  }
  .fc-toolbar-title {
    font: 600 32px Poppins SemiBold;
  }
  .fc-divider {
    border-color: ${({ theme }) => theme.coolGray300};
  }
  .fc-col-header-cell {
    height: 48px;
    font: 600 14px Poppins SemiBold;
    color: ${({ theme }) => theme.coolGray500};
  }
  .fc-day {
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.red200};
    }
  }
  .fc-daygrid-day-number {
    font: 600 14px Poppins SemiBold;
    color: ${({ theme }) => theme.coolGray500};
  }
  .fc-button-group {
    .fc-button {
      background-color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }
  .fc-daygrid-event-harness {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 8px;
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
`;
