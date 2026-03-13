import { useState } from "react";

import {
  Section,
  Title,
  ProjectsGrid,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  ProjectContainer,
  PaginationButton,
  PaginationTabs,
} from "./Projects-Style";

import { Button } from "../Style-Button";
import ProjectsData from "../Projects/Projects-Data";

export function Projects() {
  const [page, setPage] = useState(1);

  const projectsPerPage = 3;
  const start = (page - 1) * projectsPerPage;
  const visibleProjects = ProjectsData.slice(start, start + projectsPerPage);
  const totalPages = Math.ceil(ProjectsData.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);

    const section = document.getElementById("projects");

    if (section) {
      const offset = 80; // ajuste se sua navbar for maior/menor
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <ProjectContainer>
      <Section id="projects">
        <Title>Projetos</Title>

        <ProjectsGrid>
          {visibleProjects.map((project) => (
            <Card key={project.id}>
              <CardImage src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <Button
                small
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

        <PaginationTabs>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationButton
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </PaginationTabs>
      </Section>
    </ProjectContainer>
  );
}
