import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import heroBg from "../../assets/heroBg.png";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: ${pxToRem(32)};
  
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 30vh ${pxToRem(60)};
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${pxToRem(80)} ${pxToRem(24)};
  }
`;

export const Title = styled.h1`
  font-size: ${pxToRem(56)};
  font-weight: 700;
  line-height: 1.2;
`;

export const Name = styled.span`
  background: linear-gradient(90deg, #7b61ff, #2dd4bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Role = styled.span`
  display: block;
  font-size: ${pxToRem(28)};
  font-weight: 500;
  color: #9aa4b2;
  margin-top: ${pxToRem(8)};
`;

export const Paragraph = styled.p`
  font-size: ${pxToRem(20)};
  max-width: 45ch;
  margin-left: ${pxToRem(16)};
  width: 100%;
  line-height: 1.5;
`;
