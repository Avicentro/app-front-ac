import styled from "styled-components";

export const SideMenuWrapper = styled.nav`
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  background-image: ${({ theme }) => theme.bgNightSky};
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      .item-button {
        all: unset;
        padding: 17px;
        display: flex;
        gap: 16px;
        align-items: center;
        text-decoration: none;
        color: ${({ theme }) => theme.coolGray500};
        width: 216px;
        cursor: pointer;
        .logo-item {
          svg {
            rect {
              stroke: ${({ theme }) => theme.coolGray500};
            }
            path {
              stroke: ${({ theme }) => theme.coolGray500};
            }
            ellipse {
              stroke: ${({ theme }) => theme.coolGray500};
            }
          }
        }
        &:hover {
          background-color: ${({ theme }) => theme.primaryBG};
          border-radius: 12px;
          color: ${({ theme }) => theme.primary};
          .logo-item {
            svg {
              rect {
                stroke: ${({ theme }) => theme.primary};
              }
              path {
                stroke: ${({ theme }) => theme.primary};
              }
              ellipse {
                stroke: ${({ theme }) => theme.primary};
              }
            }
          }
        }
        &:active {
        }
      }
    }
  }
  .logout {
    padding: 17px;
    display: flex;
    gap: 16px;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.coolGray500};
    width: 216px;
    cursor: pointer;
    .icon {
      svg {
        path {
          stroke: ${({ theme }) => theme.coolGray500};
        }
      }
    }
    .label {
      font: 600 15px Poppins SemiBold;
      color: ${({ theme }) => theme.coolGray500};
    }
  }
`;
