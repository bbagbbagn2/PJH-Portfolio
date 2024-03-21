import React from 'react';
import styled from 'styled-components';

type ProjectInfoProps = {
  project: {
    name: string;
    siteName?: string | null;
    siteURL?: string;
  }
}
export default function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <Container>
      <ProjectInfoHeading>{project.name}</ProjectInfoHeading>
      {project.siteName && project.siteURL && (
        <ProjectInfoLink
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.name + ' live demo.'}
          href={project.siteURL}
        >
          {project.siteName}
        </ProjectInfoLink>
      )}
    </Container>
  );
}

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.2rem;
  justify-content: space-between;
`;

const Container = styled.div`
  padding: 2em;
`;

const ProjectInfoHeading = styled.h5`
  margin: 0;
  font-size: 1.125em;
`;

const ProjectInfoLink = styled.a`
  white-space: pre;
  color: #3c8fdd;
`;
