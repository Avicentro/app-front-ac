import styled from "styled-components";

export const EditFieldWrapper = styled.div`
  .field-container {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: max-content;
    .actions-container {
      display: flex;
      gap: 4px;
      button {
        all: unset;
        display: grid;
        place-items: center;
        border-radius: 50%;
        width: 32px;
        aspect-ratio: 1 / 1;
        background-color: var(--button-bgColor);
        cursor: pointer;
        svg {
          path {
            color: ${({ theme }) => theme.white};
          }
        }
      }
      button[data-item-type="accent-1"] {
        --button-bgColor: ${({ theme }) => theme.primaryDarkMode};
      }
      button[data-item-type="accent-2"] {
        --button-bgColor: ${({ theme }) => theme.secondary};
      }
    }
  }
  strong {
    font: 600 24px ${({ theme }) => theme.primaryFontSemibold};
  }
  .observation-container {
    max-width: 500px;
    margin-right: 8px;
    width: 100%;
    p {
      word-wrap: break-word;
      white-space: initial;
    }
  }
  .icon-container {
    label {
      margin-right: 8px;
    }
  }
  .pencil-icon-container {
    cursor: pointer;
  }
`;
