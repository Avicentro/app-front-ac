import styled from "styled-components";

export const EntryOrderFormWrapper = styled.form`
  .grid-weighing-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 24px;
  }
  .weighing-selector {
    grid-column: 1 / -1;
  }
`;
