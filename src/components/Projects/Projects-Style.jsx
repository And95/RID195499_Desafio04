import styled from "styled-components";
import { media } from "../../styles/media";
import { pxToRem } from "../../utils/pxToRem";

// padding: ${pxToRem(120)} ${pxToRem(60)};
export const ProjectContainer = styled.section`
  padding: ${pxToRem(20)} ${pxToRem(60)};

  ${media.tablet`
    padding: ${pxToRem(80)} ${pxToRem(24)};
  `}

  ${media.mobile`
    padding: ${pxToRem(60)} ${pxToRem(16)};
  `}
`;

export const Section = styled.section`
  background: #0b1728;
  padding: ${pxToRem(60)} auto;
  margin: ${pxToRem(60)} auto;
`;

export const Title = styled.h2`
  font-size: ${pxToRem(56)};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${pxToRem(60)};
`;

// grid-template-columns: repeat(auto-fit, minmax(${pxToRem(280)}, 1fr));
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${pxToRem(320)}, 1fr));
  gap: ${pxToRem(80)};
  margin-left: ${pxToRem(24)};
`;

export const Card = styled.div`
  background: #0f1c2e;
  border-radius: ${pxToRem(20)};
  padding: ${pxToRem(20)};
  border: 3px solid rgba(137, 137, 137, 0.97);
  border-radius: ${pxToRem(20)} ${pxToRem(0)} ${pxToRem(20)} ${pxToRem(0)};

  box-shadow: 0 ${pxToRem(10)} ${pxToRem(30)} rgba(0, 0, 0, 0.6);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 ${pxToRem(15)} ${pxToRem(40)} rgba(0, 0, 0, 0.8);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: ${pxToRem(10)};
  margin-bottom: ${pxToRem(20)};
`;

export const CardTitle = styled.h3`
  color: white;
  font-size: ${pxToRem(20)};
  margin-bottom: ${pxToRem(12)};
`;

export const CardDescription = styled.p`
  color: #c7d2fe;
  font-size: ${pxToRem(14)};
  line-height: 1.6;
  margin-bottom: ${pxToRem(20)};
`;
