import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { media } from "../../styles/media";

export const CareerContainer = styled.section`
  padding: ${pxToRem(80)} ${pxToRem(16)};
  max-width: ${pxToRem(1200)};
  margin: 0 auto;
  overflow-x: hidden;

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

export const ChartWrapper = styled.div`
  width: 100%;
  max-width: ${pxToRem(900)};
  height: ${pxToRem(320)};
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  ${media.tablet`
    max-width: ${pxToRem(950)};
    height: ${pxToRem(420)};
  `}

  ${media.desktop`
    max-width: ${pxToRem(1000)};
    height: ${pxToRem(520)};
  `}
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(20)};
  margin: 0 auto;
  box-sizing: border-box;

  background: #050816;
  border: 1px solid rgba(59, 130, 246, 0.2);

  box-shadow: 0 0 ${pxToRem(40)} rgba(34, 211, 238, 0.15);

  canvas {
    max-width: 100%;
  }
`;

export const StatsContainer = styled.div`
  margin-top: ${pxToRem(18)};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${pxToRem(16)};

  ${media.mobile`
    grid-template-columns: 1fr;
  `}

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const StatCard = styled.div`
  padding: ${pxToRem(28)};
  border-radius: ${pxToRem(18)};
  text-align: center;

  background: #050816;
  border: 1px solid rgba(34, 211, 238, 0.2);

  box-shadow: 0 0 ${pxToRem(30)} rgba(34, 211, 238, 0.08);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 ${pxToRem(40)} rgba(34, 211, 238, 0.2);
  }
`;

export const StatNumber = styled.div`
  font-size: ${pxToRem(40)};
  font-weight: 700;
  color: #22d3ee;
  margin-bottom: ${pxToRem(8)};

  ${media.tablet`
    font-size: ${pxToRem(48)};
  `}
`;

export const StatLabel = styled.div`
  font-size: ${pxToRem(14)};
  color: #cbd5f5;
  line-height: 1.4;

  ${media.tablet`
    font-size: ${pxToRem(16)};
  `}
`;
