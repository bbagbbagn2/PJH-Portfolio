import React from 'react';
import styled from 'styled-components';
import { ICONDB_LOGO, DRINKABLE_LOGO, PORTFOLIO_LOGO, NOTIFICATION_LOGO } from '@/assets/svgs';

type ProjectLogoProps = {
  project: {
    name: string;
  };
};

export default function ProjectLogo({ project }: ProjectLogoProps) {
  return (
    <StyledFigure>
      {project.name === 'Icondb' && ICONDB_LOGO}
      {project.name === 'Drinkable' && DRINKABLE_LOGO}
      {project.name === 'Notification' && NOTIFICATION_LOGO}
      {project.name === 'Personal Website' && PORTFOLIO_LOGO}
      <figcaption className="visuallyhidden">{project.name} logo.</figcaption>
    </StyledFigure>
  );
}

const StyledFigure = styled.figure`
  margin: 0;
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff4ff;
  transition: filter 0.3s;
`;