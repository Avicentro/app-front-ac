import styled from "styled-components";

export const LogbookHtmlWrapper = styled.div`
  max-height: 220px;
  overflow-y: auto;
  .header-container {
    display: flex;
    justify-content: end;
    margin-bottom: 20px;

    .calendar-container {
      display: flex;
      gap: 4px;
      align-items: center;
      font: 400 12px ${({ theme }) => theme.primaryFontRegular};
      color: ${({ theme }) => theme.green500};
      svg {
        path {
          stroke: ${({ theme }) => theme.green500};
        }
      }
    }
  }
`;
