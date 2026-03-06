import { timeline } from "./About-Data"

import {
  AboutContainer,
  Title,
  Timeline,
  Line,
  Item,
  Dot,
  Year,
  Text
} from "./About-Style"

export function About() {
  return (
    <AboutContainer id="about">
      <Title>Sobre mim</Title>

      <Timeline>
        <Line />

        {timeline.map((item) => (
          <Item key={item.year}>
            <Dot />
            <Year>{item.year}</Year>
            <Text>{item.text}</Text>
          </Item>
        ))}
      </Timeline>
    </AboutContainer>
  )
}