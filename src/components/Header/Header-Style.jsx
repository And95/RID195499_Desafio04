import styled from "styled-components";
import { media } from "../../styles/media";
import { pxToRem } from "../../utils/pxToRem";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 0 auto;

  padding: ${pxToRem(20)} ${pxToRem(24)};
  font-size: ${pxToRem(20)};

  ${media.tablet`
    padding: ${pxToRem(20)} ${pxToRem(48)};
  `}

  ${media.desktop`
    padding: ${pxToRem(24)} ${pxToRem(100)};
    font-size: ${pxToRem(24)};
  `}
`;

export const NavLink = styled.a`
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;