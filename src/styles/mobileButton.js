import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;

  width: ${pxToRem(32)};
  height: ${pxToRem(24)};
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #7b61ff, #2dd4bf);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 70vw;

  background: #0b1728;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${pxToRem(40)};

  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(100%)"};

  transition: transform 0.3s ease;

  box-shadow: -10px 0 30px rgba(0,0,0,0.5);

  a {
    font-size: ${pxToRem(24)};
    font-weight: 500;
    color: white;
    text-decoration: none;

    &:hover {
      background: linear-gradient(90deg, #7b61ff, #2dd4bf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};

  transition: 0.3s;
`;