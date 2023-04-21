import styled from "styled-components";

export const ProgrammingWrapper = styled.div`
  .title {
    margin-bottom: 23px;
    h1 {
      font: 700 40px Poppins Bold;
      color: ${({ theme }) => theme.coolGray800};
      margin: 0;
    }
    .sub-title {
      font: 400 15px Poppins Regular;
      margin: 0;
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`;
