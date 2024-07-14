import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import NavItem from '../NavItem/index';
import { colors } from '@_components/theme';

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
      <NavItem href="/project">My Projects</NavItem>
      <NavItem
        href="https://www.notion.so/parkresume/c4ce189e86cf43e8858349a33ebb482d"
        external
      >
        My Resume
      </NavItem>
    </CrossSiteNavList>
  );
}

const CrossSiteNavList = styled.ul`
  a {
    color: ${colors.text};
  }
`;
