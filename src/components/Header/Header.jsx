import GitHub from "../../assets/size-32-github.svg";
import Linkedin from "../../assets/size-32-linkedin.svg";

import { HeaderContainer, NavList, IconsList, NavLink } from "./Header-Style"

export function Header() {
  return (
    <HeaderContainer>
      <NavList>
        <li><NavLink href="#projects">Projetos</NavLink></li>
        <li><NavLink href="#technologies">Tecnologias</NavLink></li>
        <li><NavLink href="#about">Sobre mim</NavLink></li>
      </NavList>

      <IconsList>
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
      </IconsList>
    </HeaderContainer>
  );
}