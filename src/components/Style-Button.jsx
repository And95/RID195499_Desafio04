import styled from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const Button = styled.button`
  padding: ${pxToRem(14)} ${pxToRem(32)};
  border: none;
  border-radius: 999px;
  margin-left: ${pxToRem(32)};
  font-size: ${pxToRem(24)};
  font-weight: 600;
  color: #fff;
  width: fit-content;
  cursor: pointer;

  background: linear-gradient(90deg, #8a5cff 0%, #3bd1ff 100%);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(0.95);
  }

  &.small {
    margin-left: 0;
    font-size: ${pxToRem(16)};
    padding: ${pxToRem(10)} ${pxToRem(24)};
  }
`;
