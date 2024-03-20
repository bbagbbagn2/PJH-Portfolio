import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/index';

type CrossSiteNavProps = {
  classNameProject?: string;
};

export default function BasicContact({ classNameProject }: CrossSiteNavProps) {
  const renderHomeNavItem = () => {
    return classNameProject === 'project' && <NavItem href="/">Home</NavItem>;
  };

  return (
    <CrossSiteNavList className={`${classNameProject} cross-site-nav`}>
      {renderHomeNavItem()}
      <NavItem href="/project">내 프로젝트</NavItem>
      <NavItem
        href="https://www.notion.so/parkresume/c4ce189e86cf43e8858349a33ebb482d"
        external
      >
        내 이력서
      </NavItem>
    </CrossSiteNavList>
  );
};

const CrossSiteNavList = styled.ul`
  a {
    color: currentColor;
  }
`;
