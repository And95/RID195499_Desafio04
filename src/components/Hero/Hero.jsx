
import { HeroContainer, Paragraph } from "./Hero-Style"
import { Button } from "../Style-Button"

export function Hero(){
    return(
        <HeroContainer>
            <h1>Lorem ipsum dolor sit amet</h1>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
            <Button>Saiba Mais</Button>
        </HeroContainer>
    )
}