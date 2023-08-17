import styled from "styled-components";

interface CustomerContainerProps {
  isChecked: boolean;
}

export const ClientManagementWrapper = styled.div``;

export const CustomersContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  max-height: 300px;
  overflow-y: scroll;
  padding: 8px;
`;

export const CustomerContainer = styled.li<CustomerContainerProps>`
  cursor: pointer;
  display: flex;
  gap: 8px;
  background-color: ${({ isChecked, theme }) => isChecked && theme.green700};
  text-decoration: ${({ isChecked, theme }) => isChecked && "underline"};
  color: ${({ isChecked, theme }) => isChecked && theme.white};
  border-radius: 8px;
  padding: 8px;
`;
