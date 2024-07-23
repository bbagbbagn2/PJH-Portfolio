import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Basic from '../ContactPortal/BasicContact/BasicContact';
import Social from '../ContactPortal/SocialContact';
import CrossSiteNav from '../CrossSiteNav/CrossSiteNav';
import * as S from './Header.styles';

export default function HeaderSection() {
  const [isMenuFocused, setIsMenuFocused] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const handelMenuClick = () => {
    setIsMenuFocused(prev => !prev);
  };
  
  return (
    <S.Header
      id="site-header"
      className={`${isHome ? 'home' : 'project'} ${
        isMenuFocused ? 'open' : 'close'
      }`}
    >
      <S.NavItem id="logo"></S.NavItem>
      <S.MenuToggle
        onClick={handelMenuClick}
        className={`menu-toggle ${isMenuFocused ? 'x' : ''}`}
      />
      <S.ContactMenu
        id="contact-menu"
        className={isMenuFocused ? 'open shadow' : ''}
      >
        <CrossSiteNav />
        <Basic />
        <Social />
      </S.ContactMenu>
    </S.Header>
  );
}
