import {
  Section,
  Title,
  ProjectsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
} from "./Projects-Style";

import { Button } from "../Style-Button";

import ProjectsData from "../Projects/Projects-Data";

export function Projects() {
  return (
    <>
      <Section>
        <Title>Projetos</Title>
        <ProjectsGrid>
          {ProjectsData.map((project) => (
            <Card key={project.id}>
              <CardImage src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <Button className="small" href={project.link}>
                Clique aqui
              </Button>
            </Card>
          ))}
        </ProjectsGrid>
      </Section>
    </>
  );
}
