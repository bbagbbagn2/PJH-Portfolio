import React from 'react';
import styled from 'styled-components';
import {
  ICONDB_LOGO,
  DRINKABLE_LOGO,
  PORTFOLIO_LOGO,
  NOTIFICATION_LOGO,
} from '@_assets/svgs/index';

type LogoComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface LogoMap {
  [key: string]: LogoComponent;
}

const logoMap: LogoMap = {
  Icondb: ICONDB_LOGO,
  Drinkable: DRINKABLE_LOGO,
  Notification: NOTIFICATION_LOGO,
  'Personal Website': PORTFOLIO_LOGO,
};

interface ProjectLogoProps {
  project: {
    name: keyof LogoMap;
  };
}

export default function ProjectLogo({ project }: ProjectLogoProps) {
  const { name } = project;
  const Logo = logoMap[name];

  return (
    <StyledFigure>
      {Logo && <Logo />}
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
