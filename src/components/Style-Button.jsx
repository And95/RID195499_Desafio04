import styled from "styled-components";
import { pxToRem } from "../utils/pxToRem";
import { media } from "./../styles//media";

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ small }) =>
    small ? `${pxToRem(10)} ${pxToRem(24)}` : `${pxToRem(14)} ${pxToRem(32)}`};

  font-size: ${({ small }) => (small ? pxToRem(15) : pxToRem(20))};

  margin-left: 0;

  ${media.tablet`
    margin-left: ${({ small }) => (small ? 0 : pxToRem(64))};
  `}

  ${media.desktop`
    margin-left: ${({ small }) => (small ? 0 : pxToRem(64))};
  `}

  border-radius: 999px;
  border: none;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  width: fit-content;
  cursor: pointer;
  background: linear-gradient(90deg, #8a5cff 0%, #3bd1ff 100%);
  transition:
    transform 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(0.95);
  }

  &:focus-visible {
    outline: 3px solid #3bd1ff;
    outline-offset: 3px;
  }
`;
