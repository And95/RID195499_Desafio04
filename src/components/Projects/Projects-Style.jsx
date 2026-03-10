import styled from "styled-components";

import { pxToRem } from "../../utils/pxToRem";

export const Section = styled.section`
  background: #0b1728;
  padding: ${pxToRem(60)} ${pxToRem(80)};
`;

export const Title = styled.h2`
  color: white;
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(40)};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${pxToRem(320)}, 1fr));
  gap: ${pxToRem(40)};
`;

export const Card = styled.div`
  background: #0f1c2e;
  border-radius: ${pxToRem(20)};
  padding: ${pxToRem(20)};
  border: 1px solid rgba(255, 255, 255, 0.08);

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

export const Button = styled.a`
  display: inline-block;
  padding: ${pxToRem(10)} ${pxToRem(20)};

  border-radius: ${pxToRem(20)};

  background: linear-gradient(90deg, #7b2ff7, #00c6ff);

  color: white;
  font-size: ${pxToRem(14)};
  text-decoration: none;

  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
