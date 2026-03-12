import styled from "styled-components";
import { media } from "../../styles/media";
import { pxToRem } from "../../utils/pxToRem";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  box-sizing: border-box;

  padding: ${pxToRem(20)} ${pxToRem(24)};
  font-size: ${pxToRem(20)};

  ${media.desktop`
    justify-content: space-between;
    padding: ${pxToRem(24)} ${pxToRem(100)};
  `}
`;

export const DesktopNav = styled.ul`
  display: none;

  ${media.desktop`
    display: flex;
    gap: ${pxToRem(48)};
    align-items: center;
  `}
`

export const DesktopIcons = styled.ul`
  display: none;

  ${media.desktop`
    display: flex;
    gap: ${pxToRem(20)};
    align-items: center;
  `}
`

export const NavLink = styled.a`
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
