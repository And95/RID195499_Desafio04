// hook
import { useState } from "react";

// icons
import GitHub from "../../assets/size-32-github.svg";
import Linkedin from "../../assets/size-32-linkedin.svg";

// styles
import { HeaderContainer, NavLink } from "./Header-Style";
import { HamburgerButton, MobileMenu, Overlay } from "../../styles";

// utils
import { pxToRem } from "../../utils/pxToRem";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <HeaderContainer>
        {/* Desktop Navigation */}
        <ul className="flex-center desktop-nav" style={{ gap: pxToRem(48) }}>
          <li><NavLink href="#projects">Projetos</NavLink></li>
          <li><NavLink href="#technologies">Tecnologias</NavLink></li>
          <li><NavLink href="#about">Sobre mim</NavLink></li>
        </ul>

        {/* Social Icons */}
        <ul className="flex-center desktop-icons" style={{ gap: pxToRem(20) }}>
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

        {/* Hamburger Button */}
        <HamburgerButton onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerButton>
      </HeaderContainer>

      {/* Overlay */}
      <Overlay open={menuOpen} onClick={closeMenu} />

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen}>
        <NavLink href="#projects" onClick={closeMenu}>Projetos</NavLink>
        <NavLink href="#technologies" onClick={closeMenu}>Tecnologias</NavLink>
        <NavLink href="#about" onClick={closeMenu}>Sobre mim</NavLink>
      </MobileMenu>
    </>
  );
}