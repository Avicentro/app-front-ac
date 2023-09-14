import styled from "styled-components";

export const TableWrapper = styled.div`
  display: block;
  max-width: 100%;
  overflow-x: auto;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  table {
    width: 100%;
    border-spacing: 0;
    padding-bottom: 20px;
    text-align: left;
    font: 500 12px ${({ theme }) => theme.primaryFontMedium};
    color: ${({ theme }) => theme.white};
    thead {
      background-color: ${({ theme }) => theme.primary};
    }
    th:first-child {
      border-radius: 8px 0 0 8px;
      padding-left: 12px;
    }

    th:last-child {
      border-radius: 0 8px 8px 0;
    }
    tr {
      :first-child {
        td {
          padding-top: 32px;
          padding-bottom: 16px;
        }
      }
      td {
        border-top: 0;
        padding: 16px 8px;
      }
    }

    tbody {
      .loading {
        height: 350px;
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.coolGray100};
      font-size: 12px;
      width: 1%;
      border-top: 1px solid ${({ theme }) => theme.coolGray100};
      padding-left: 10px;

      &.collapse {
        width: 0.0000000001%;
      }

      :last-child {
        border-right: 0;
      }
    }
    td:nth-of-type(1) {
      font-size: 14px;
    }
    td:nth-of-type(1):first-letter {
      text-transform: capitalize;
    }
    th {
      padding-left: 0px;
      border: 0px;
      padding-bottom: 11px;
      font-weight: 600;
      padding-top: 11px;
    }
    tfoot {
      td {
        border-bottom: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export const CalendarWrapper = styled.div`
  border: none !important;
  padding: none;
  gap: 10px;
  display: flex;
  flex-direction: row;
`;
