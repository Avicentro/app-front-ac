import styled from "styled-components";

export const DetailColumn = styled.div`
  display: flex;
  text-align: end;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.blue};
  font-weight: 600;
  .paginate-button {
    all: unset;
    padding: 4px;
    aspect-ratio: 1/1;
    border: 1px solid ${({ theme }) => theme.primary};
    font: 400 16px ${({ theme }) => theme.primaryFontMedium};
    color: ${({ theme }) => theme.coolGray800};
  }
  .selected {
    background-color: ${({ theme }) => theme.coolGray700};
    color: ${({ theme }) => theme.white};
  }
  .paginate-button:hover {
    transform: scale(1.1);
  }
  svg {
    cursor: pointer;
  }
  svg:hover {
    transform: scale(1.1);
  }
  .disabled {
    svg {
      cursor: not-allowed;
    }
    svg:hover {
      transform: scale(1);
    }
  }
`;
