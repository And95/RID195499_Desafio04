import styled from "styled-components";

import { pxToRem } from "../../utils/pxToRem";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${pxToRem(60)} ${pxToRem(60)};
  max-width: 90%;
  margin: ${pxToRem(120)} auto 0 auto;

  font-size: ${pxToRem(20)};
`;

export const NavLink = styled.a`
  font-size: ${pxToRem(22)};
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
