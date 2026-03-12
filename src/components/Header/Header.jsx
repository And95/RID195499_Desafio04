// hook
import { useState } from "react";

// icons
import GitHub from "../../assets/size-32-github.svg";
import Linkedin from "../../assets/size-32-linkedin.svg";

// styles
import { HeaderContainer, DesktopNav, DesktopIcons, NavLink } from "./Header-Style";
import { HamburgerButton, MobileMenu, Overlay } from "../../styles/mobileButton";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <HeaderContainer>

        {/* Hamburger (Mobile) */}
        <HamburgerButton onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerButton>

        {/* Desktop Navigation */}
        <DesktopNav>
          <li><NavLink href="#projects">Projetos</NavLink></li>
          <li><NavLink href="#technologies">Tecnologias</NavLink></li>
          <li><NavLink href="#about">Sobre mim</NavLink></li>
        </DesktopNav>

        {/* Social Icons */}
        <DesktopIcons>
          <li>
            <a href="https://github.com/And95" target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="GitHub"/>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/andregonzaga95" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn"/>
            </a>
          </li>
        </DesktopIcons>

      </HeaderContainer>

      <Overlay open={menuOpen} onClick={closeMenu} />

      <MobileMenu open={menuOpen}>
        <NavLink href="#projects" onClick={closeMenu}>Projetos</NavLink>
        <NavLink href="#technologies" onClick={closeMenu}>Tecnologias</NavLink>
        <NavLink href="#about" onClick={closeMenu}>Sobre mim</NavLink>
      </MobileMenu>
    </>
  )
}
