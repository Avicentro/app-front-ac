import styled from "styled-components";

export const CustomCalendarWrapper = styled.div`
  width: 920px;
  height: 736px;
  .fc-event {
    background-color: #17a2b8;
    color: ${({ theme }) => theme.coolGray400};
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
`;
