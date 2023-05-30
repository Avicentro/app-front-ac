import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../../../../constants/constants";

export const EntryOrderFormWrapper = styled.form`
  .grid-weighing-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 24px;
  }
  .weighing-selector {
    grid-column: 1 / -1;
  }
  .dynamic-form-container {
    grid-template-columns: 1fr;
  }
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    .dynamic-form-container {
      grid-template-columns: 1fr 1fr;
    }
    .grid-weighing-container {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }
    .button-add-container {
      display: flex;
      align-items: center;
    }
  }
`;
