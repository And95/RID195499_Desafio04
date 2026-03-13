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

  ${media.tablet`
    justify-content: space-between;
    padding: ${pxToRem(24)} ${pxToRem(40)};
  `}

  ${media.desktop`
    padding: ${pxToRem(24)} ${pxToRem(100)};
  `}
`;

export const DesktopNav = styled.ul`
  display: none;

  ${media.tablet`
    display: flex;
    gap: ${pxToRem(24)};
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  `}

  ${media.desktop`
    gap: ${pxToRem(48)};
  `}
`;

export const DesktopIcons = styled.ul`
  display: none;

  ${media.tablet`
    display: flex;
    gap: ${pxToRem(16)};
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  `}

  ${media.desktop`
    gap: ${pxToRem(20)};
  `}
`;

export const NavLink = styled.a`
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
