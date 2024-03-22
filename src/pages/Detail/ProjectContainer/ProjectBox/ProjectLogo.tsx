import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconDB } from '@_logos/icondb-logo.svg';
import { ReactComponent as Drinkable } from '@_logos/drinkable-logo.svg';
import { ReactComponent as Personal } from '@_logos/Pjh-Portfolio logo.svg';

type ProjectLogoProps = {
  project: {
    name: string;
  };
};

const ICONDB_LOGO = <IconDB />;
const DRINKABLE_LOGO = <Drinkable />;
const PERSONAL_LOGO = <Personal />;

export default function ProjectLogo({ project }: ProjectLogoProps) {
  return (
    <Figure>
      {project.name === 'Icondb' && ICONDB_LOGO}
      {project.name === 'Drinkable' && DRINKABLE_LOGO}
      {project.name === 'Personal Website' && PERSONAL_LOGO}
      <figcaption className="visuallyhidden">{project.name} logo.</figcaption>
    </Figure>
  );
}

const Figure = styled.figure`
  margin: 0;
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(245, 244, 252, 0.62);
  transition: filter 0.3s;
`;
