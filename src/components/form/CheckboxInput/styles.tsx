import styled from "styled-components";

export const CheckboxInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  input[type="checkbox"] {
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    transform: scale(1.5);
    padding: 10px;
    cursor: pointer;
  }
`;
