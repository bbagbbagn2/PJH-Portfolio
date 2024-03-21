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
      <Title>{project.name}</Title>
      {project.siteName && project.siteURL && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.name + ' live demo.'}
          href={project.siteURL}
        >
          {project.siteName}
        </Link>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 2em;
`;

const Title = styled.h5`
  margin: 0;
  font-size: 1.125em;
`;

const Link = styled.a`
  white-space: pre;
  color: #3c8fdd;
`;
