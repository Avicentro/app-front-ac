import styled from "styled-components";

export const SvgWrapper = styled.svg`
  background-color: ${({ theme }) => theme.coolGray100};
  position: absolute;
		top: 0;
		left: 0;
    width: 100%;
    height: 100%;
		box-sizing: border-box;
		display: block;
    z-index: -1;
		background-color: ${({ theme }) => theme.white};
    background-image: linear-gradient(to bottom, rgba(247, 247, 252, 0.86), ${({ theme }) => theme.coolGray100});
`;