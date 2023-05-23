import styled from "styled-components";

export const RemissionsWrapper = styled.table`
  body {
    font: 400 14px Poppins Regular;
  }
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    font: 300 8px Poppins Regular;
    text-align: center;
  }
  .title {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primaryDarkMode};
  }
  th {
    .title {
      background-color: ${({ theme }) => theme.primary};
    }
  }
  tr {
    page-break-inside: avoid;
  }
`;
