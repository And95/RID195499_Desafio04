import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const AboutContainer = styled.section`
  padding: ${pxToRem(20)} ${pxToRem(60)};
  max-width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: ${pxToRem(56)};
  margin-bottom: ${pxToRem(60)};
`;

export const Timeline = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
`;

export const Line = styled.div`
  position: absolute;
  top: ${pxToRem(7)};
  left: 50%;
  transform: translateX(-50%);

  width: 75%;
  height: 6px;

  background: #fff;
`;

export const Item = styled.div`
  position: relative;
`;

export const Dot = styled.div`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  border-radius: 50%;
  background: #fff;
  margin: 0 auto ${pxToRem(16)};
`;

export const Year = styled.h3`
  font-size: ${pxToRem(36)};
  margin-bottom: ${pxToRem(10)};
`;

export const Text = styled.p`
  max-width: 50vw;
  margin: 0 auto ${pxToRem(32)} auto;
  padding: 0 ${pxToRem(8)};
  font-size: ${pxToRem(24)};
`;
