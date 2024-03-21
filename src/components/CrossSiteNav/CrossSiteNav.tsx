import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from '../NavItem/index';

const homeLink = <NavItem href="/">Home</NavItem>;

export default function BasicContact() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  function renderHomeNavItem() {
    return !isHome && homeLink;
  }

  return (
    <CrossSiteNavList>
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
}

const CrossSiteNavList = styled.ul`
  a {
    color: currentColor;
  }
`;
