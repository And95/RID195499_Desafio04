import styled from "styled-components";

import { pxToRem } from "../../utils/pxToRem";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${pxToRem(24)} ${pxToRem(100)};
  max-width: 100%;
  margin: 0 auto;

  font-size: ${pxToRem(24)}
`;

export const NavLink = styled.a`
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;