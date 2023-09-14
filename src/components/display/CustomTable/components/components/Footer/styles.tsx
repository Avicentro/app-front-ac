import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;
export const PagingInfo = styled.div`
  display: flex;
  font: 400 16px ${({ theme }) => theme.primaryFontRegular};
`;
