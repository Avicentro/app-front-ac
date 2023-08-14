import styled from "styled-components";
import { DynamicFormWrapperProps } from "./model";

export const DynamicFormWrapper = styled.div<DynamicFormWrapperProps>`
  display: grid;
  grid-template-columns: ${({ numberOfColumns }) =>
    `repeat(${numberOfColumns}, 1fr)`};
  gap: 16px;
  margin-bottom: 32px;
`;
