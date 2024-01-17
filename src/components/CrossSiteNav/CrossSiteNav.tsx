import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/index';

type CrossSiteNavProps = {
  classNameProject?: string;
};

const BasicContact: React.FC<CrossSiteNavProps> = ({ classNameProject }) => {
  const renderHomeNavItem = () => {
    return classNameProject === 'project' ? (
      <NavItem href="/">Home</NavItem>
    ) : null;
  };

  return (
    <CrossSiteNav className={`${classNameProject} cross-site-nav`}>
      {renderHomeNavItem()}
      <NavItem href="/project">내 프로젝트</NavItem>
      <NavItem href="https://www.notion.so/parkresume/c4ce189e86cf43e8858349a33ebb482d">
        내 이력서
      </NavItem>
    </CrossSiteNav>
  );
};

export default BasicContact;

const CrossSiteNav = styled.ul`
  a {
    color: currentColor;
  }
`;
