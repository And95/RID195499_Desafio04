import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { media } from "../../styles/media";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(24)};

  padding: ${pxToRem(40)} ${pxToRem(16)};
  max-width: ${pxToRem(1200)};
  margin: ${pxToRem(80)} auto 0;

  font-size: ${pxToRem(16)};
  text-align: center;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    padding: ${pxToRem(50)} ${pxToRem(40)};
    font-size: ${pxToRem(18)};
  `}

  ${media.desktop`
    padding: ${pxToRem(60)} ${pxToRem(60)};
    margin-top: ${pxToRem(120)};
    font-size: ${pxToRem(20)};
  `}
`;

export const NavLink = styled.a`
  font-size: ${pxToRem(18)};
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  ${media.tablet`
    font-size: ${pxToRem(20)};
  `}

  ${media.desktop`
    font-size: ${pxToRem(22)};
  `}
`;