import styled from "styled-components";
import { MIN_WIDTH_QUERIES } from "../../../constants/constants";

export const SideMenuWrapper = styled.nav`
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  background-image: ${({ theme }) => theme.bgNightSky};
  padding: 20px;
  display: flex;
  position: sticky;
  top: 95px;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 125px);
  background-color: white;
  margin-left: 36px;
  border-radius: 8px;
  box-shadow: 0 3px 20px #0000000b;
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
      }
      .active {
        background-color: ${({ theme }) => theme.primaryBG};
        border-radius: 12px;
        color: ${({ theme }) => theme.primary};
        .logo-item {
          svg {
            rect {
              stroke: ${({ theme }) => theme.secondary};
            }
            path {
              stroke: ${({ theme }) => theme.secondary};
            }
            ellipse {
              stroke: ${({ theme }) => theme.secondary};
            }
          }
        }

        .label-item {
          color: black;
          font-family: 'Work Sans Medium';
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
  @media ${MIN_WIDTH_QUERIES.TABLET.query} {
    grid-column: 1 / 2;
  }
  @media ${MIN_WIDTH_QUERIES.DESKTOP.query} {
  }
`;
