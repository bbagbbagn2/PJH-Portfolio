import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@_components/theme';
import { projectsData } from '../../data/projectData';
import { formatPathSegment } from '@_utils/helpers';

export default function TitleWrapper() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.title === id);

  const formattedSegment = project ? formatPathSegment(project.title) : '';

  return (
    <StyledHeader>
      <Title>{formattedSegment}</Title>
      <p>{project?.category} Project</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  margin-top: 1.1em;
  margin-bottom: 3.5rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0.67em 0;
  font-size: 1.802em;
  color: ${colors.white};
  user-select: none;
  transition: color 0.6s;
`;
