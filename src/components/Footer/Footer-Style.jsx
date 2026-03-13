import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { media } from "../../styles/media";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(48)};

  padding: ${pxToRem(32)} ${pxToRem(16)};
  max-width: ${pxToRem(1200)};
  margin-top: ${pxToRem(48)};

  font-size: ${pxToRem(16)};
  text-align: center;

  ${media.laptop`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${pxToRem(60)} ${pxToRem(60)};
    margin-top: ${pxToRem(120)};
    font-size: ${pxToRem(20)};
    text-align: left;
  `}
`;

export const Contact = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};

  h2 {
    font-size: ${pxToRem(24)};
    margin-bottom: ${pxToRem(4)};
  }

  ${media.laptop`
    flex-direction: row;
    gap: ${pxToRem(64)};

    h2 {
      font-size: ${pxToRem(24)};
    }
  `}
`;

export const Social = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  gap: ${pxToRem(32)};
  align-items: center;

  img {
    width: ${pxToRem(32)};
    transition: transform 0.2s ease;
  }

  img:hover {
    transform: scale(1.1);
  }

  ${media.laptop`
    img {
      width: ${pxToRem(64)};
    }
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

  ${media.laptop`
    font-size: ${pxToRem(22)};
  `}
`;
