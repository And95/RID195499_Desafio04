import { useEffect, useRef, useState } from "react";
import { timeline } from "./About-Data";

import {
  AboutContainer,
  Title,
  Timeline,
  Line,
  Item,
  Dot,
  Year,
  Text,
} from "./About-Style";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AboutContainer id="about" ref={aboutRef}>
      <Title>Sobre mim</Title>

      <Timeline>
        <Line $visible={isVisible} />

        {timeline.map((item, index) => (
          <Item key={item.year} $visible={isVisible} $delay={index * 0.35}>
            <Dot $visible={isVisible} $delay={index * 0.22} />
            <Year>{item.year}</Year>
            <Text>{item.text}</Text>
          </Item>
        ))}
      </Timeline>
    </AboutContainer>
  );
}
