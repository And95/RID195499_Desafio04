import {
  Section,
  Title,
  ProjectsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  ProjectContainer
} from "./Projects-Style";

import { Button } from "../Style-Button";

import ProjectsData from "../Projects/Projects-Data";

export function Projects() {
  return (
    <ProjectContainer id="projects">
      <Section>
        <Title>Projetos</Title>
        <ProjectsGrid>
          {ProjectsData.map((project) => (
            <Card key={project.id}>
              <CardImage src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <Button small
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir projeto ${project.title} em nova aba`}
                    >
                Clique aqui
              </Button>
            </Card>
          ))}
        </ProjectsGrid>
      </Section>
    </ProjectContainer>
  );
}
