import styled from "styled-components";

export const ProgrammingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  .ice-info-container {
    grid-column: 1 / 4;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .calendar-card {
    grid-column: 4 / -1;
  }
  .title {
    margin-bottom: 23px;
    .sub-title {
      margin: 0;
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`;
