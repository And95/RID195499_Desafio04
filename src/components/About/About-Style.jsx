import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { media } from "../../styles/media";

export const AboutContainer = styled.section`
  padding: ${pxToRem(80)} ${pxToRem(16)};
  max-width: ${pxToRem(1200)};
  margin: 0 auto;

  ${media.tablet`
    padding: ${pxToRem(80)} ${pxToRem(40)};
  `}

  ${media.desktop`
    padding: ${pxToRem(100)} ${pxToRem(60)};
  `}
`;

export const Title = styled.h1`
  font-size: ${pxToRem(34)};
  margin-bottom: ${pxToRem(32)};

  ${media.tablet`
    font-size: ${pxToRem(44)};
  `}

  ${media.desktop`
    font-size: ${pxToRem(56)};
    margin-bottom: ${pxToRem(60)};
  `}
`;

export const Timeline = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxToRem(16)};
  text-align: center;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const Line = styled.div`
  display: none;

  ${media.desktop`
    display: block;
    position: absolute;
    top: ${pxToRem(7)};
    left: 50%;
    transform: translateX(-50%) scaleX(${({ $visible }) => ($visible ? 1 : 0)});
    transform-origin: center;
    width: 78%;
    height: ${pxToRem(6)};
    background: #fff;
    transition: transform 0.8s ease;
  `}
`;

export const Item = styled.div`
  position: relative;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : `translateY(${pxToRem(24)})`};

  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  transition-delay: ${({ $delay }) => `${$delay}s`};
`;

export const Dot = styled.div`
  display: none;

  ${media.desktop`
    display: block;
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    border-radius: 50%;
    background: #fff;
    margin: 0 auto ${pxToRem(16)};
    transform: scale(${({ $visible }) => ($visible ? 1 : 0.6)});
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition:
      transform 0.4s ease,
      opacity 0.4s ease;
    transition-delay: ${({ $delay }) => `${$delay + 0.1}s`};
  `}
`;

export const Year = styled.h3`
  font-size: ${pxToRem(24)};
  margin-bottom: ${pxToRem(8)};

  ${media.tablet`
    font-size: ${pxToRem(28)};
  `}

  ${media.desktop`
    font-size: ${pxToRem(36)};
  `}
`;

export const Text = styled.p`
  max-width: ${pxToRem(420)};
  margin: 0 auto ${pxToRem(24)};
  padding: 0 ${pxToRem(8)};
  font-size: ${pxToRem(16)};
  line-height: 1.6;

  ${media.tablet`
    font-size: ${pxToRem(18)};
  `}

  ${media.desktop`
    font-size: ${pxToRem(20)};
  `}
`;
