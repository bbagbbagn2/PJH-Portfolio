import React from 'react';
import styled from 'styled-components';

import ProjectLink from './ProjectBox/ProjectLink';
import ProjectLogo from './ProjectBox/ProjectLogo';
import ProjectInfo from './ProjectBox/ProjectInfo';
import ProjectSkill from './ProjectBox/ProjectSkill';
import { colors } from '@_components/theme';
import { formatProjectData } from '../../../utils/helpers';

const projects = formatProjectData();

export default function ProjectList() {
  return (
    <List>
      {projects.map((project, key) => (
        <Item key={key}>
          <ProjectLink project={project} />
          <ProjectLogo project={project} />
          <ProjectInfo project={project} />
          <ProjectSkill project={project} />
        </Item>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.2rem;
  justify-content: space-between;
`;

const Item = styled.li`
  /* Positioning */
  position: relative;
  margin-bottom: 1.2rem;

  /* Styling */
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: ${colors.bg300};

  /* Overflow handling */
  overflow: hidden;

  /* Transition effect */
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition-property: transform, box-shadow;

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;
