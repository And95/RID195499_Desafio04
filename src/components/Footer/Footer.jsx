// icons images links
import GitHub from "../../assets/size-50-github.svg";
import Linkedin from "../../assets/size-50-linkedin.svg";
import Figma from "../../assets/size-50-figma.svg";

// style
import { FooterContainer, Contact, NavLink, Social } from "./Footer-Style"

// utils
import { pxToRem } from "../../utils/pxToRem";


export function Footer(){
    return(
      <FooterContainer>
        <Contact>
            <li>
                <h2>Meu contato:</h2>
                <NavLink href="tel:+5582987077520">
                    +55 (82) 98707-7520
                </NavLink>
            </li>

            <li>
                <h2>Email:</h2>
                <NavLink href="mailto:andregonzaga95@gmail.com">
                    andregonzaga95@gmail.com
                </NavLink>
                </li>
        </Contact>

        <Social>
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

            <li>
                <a href="https://www.figma.com/@And95" target="_blank" rel="noopener noreferrer">
                    <img src={Figma} alt="Figma" />
                </a>
            </li>
        </Social>
    </FooterContainer>
    )
}
