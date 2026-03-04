// icons images links
import GitHub from "../../assets/size-32-github.svg";
import Linkedin from "../../assets/size-32-linkedin.svg";

// style
import { HeaderContainer, NavLink } from "./Header-Style"

// utils
import { pxToRem } from "../../utils/pxToRem";

export function Header() {
  return (
    <HeaderContainer>
      <ul className="flex-center" style={{ gap: pxToRem(48) }}>
        <li><NavLink href="#projects">Projetos</NavLink></li>
        <li><NavLink href="#technologies">Tecnologias</NavLink></li>
        <li><NavLink href="#about">Sobre mim</NavLink></li>
      </ul>

      <ul className="flex-center" style={{ gap: pxToRem(20) }}>
        <li>
          <a href="https://github.com/And95" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andregonzaga95" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </HeaderContainer>
  );
}