import React from 'react';
import styled from 'styled-components';
import ProjectLink from './ProjectBox/ProjectLink';
import ProjectLogo from './ProjectBox/ProjectLogo';
import ProjectInfo from './ProjectBox/ProjectInfo';
import { formatprojectData } from '../../../utils/helpers';

const projects = formatprojectData();

export default function ProjectList() {
  return (
    <List>
      {projects.map((project, key) => (
        <Item key={key}>
          <ProjectLink project={project} />
          <ProjectLogo project={project} />
          <ProjectInfo project={project} />
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
  border-radius: 0.2rem;
  box-shadow: 0 8px 6px -6px rgba(235, 234, 242, 0.5);
  background-color: #fff;

  /* Overflow handling */
  overflow: hidden;

  /* Transition effect */
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition-property: transform, box-shadow;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
  }
`;
