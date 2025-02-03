import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import NavItem from '../NavItem/NavItem';
import { colors } from '@_components/theme';
import { RESUME_URL } from '@_config/settings';

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
      <NavItem href={RESUME_URL} external>
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
