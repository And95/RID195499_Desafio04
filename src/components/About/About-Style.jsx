import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { media } from "../../styles/media";

export const AboutContainer = styled.section`
  padding: ${pxToRem(60)} ${pxToRem(16)};
  margin: 0 auto;
  max-width: ${pxToRem(1200)};

  ${media.tablet`
    padding: ${pxToRem(80)} ${pxToRem(40)};
  `}

  ${media.desktop`
    padding: ${pxToRem(100)} ${pxToRem(60)};
  `}
`;

export const Title = styled.h1`
  font-size: ${pxToRem(34)};
  margin-bottom: ${pxToRem(40)};

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
  gap: ${pxToRem(40)};
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
    transform: translateX(-50%);
    width: 75%;
    height: ${pxToRem(6)};
    background: #fff;
  `}
`;

export const Item = styled.div`
  position: relative;
`;

export const Dot = styled.div`
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  border-radius: 50%;
  background: #fff;
  margin: 0 auto ${pxToRem(16)};

  ${media.desktop`
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
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