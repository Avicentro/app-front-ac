import styled from "styled-components";

export const ModalConfirmContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .modal-label {
    all: unset;
    font: 400 16px Work Sans Regular;
    line-height: 32px;
    color: ${({ theme }) => theme.coolGray600};
    margin-bottom: 40px;
  }
  .call-to-action-container {
    display: flex;
    justify-content: center;
  }
`;
