import styled from "styled-components";

import { pxToRem } from "../../utils/pxToRem";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${pxToRem(24)} ${pxToRem(60)};
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${pxToRem(48)};
  list-style: none;
`;

export const IconsList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${pxToRem(20)};
  list-style: none;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;