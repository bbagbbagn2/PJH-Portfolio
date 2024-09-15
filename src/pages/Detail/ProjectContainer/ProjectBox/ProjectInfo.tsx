import React from 'react';
import styled from 'styled-components';
import { colors } from '@_components/theme';

type ProjectInfoProps = {
  project: {
    name: string;
    siteName?: string | null;
    siteURL?: string;
  };
};

export default function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <Container className="project-item">
      <Title>{project.name}</Title>
      {project.siteName && project.siteURL && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.name + ' live demo.'}
          href={project.siteURL}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 2em;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.125em;
  color: ${colors.white};
`;

const Link = styled.a`
  white-space: pre;
`;
