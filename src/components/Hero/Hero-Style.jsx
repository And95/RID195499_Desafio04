import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: ${pxToRem(24)};

  padding: ${pxToRem(24)} ${pxToRem(60)};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  max-width: 41ch; 
  width: 100%;
  line-height: 1.5;
`;
