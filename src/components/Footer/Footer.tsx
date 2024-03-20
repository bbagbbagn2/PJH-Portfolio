import React from 'react';
import { useLocation } from 'react-router-dom';

import BasicContact from '../ContactPortal/BasicContact/BasicContact';
import Social from '../ContactPortal/SocilaContact';
import CrossSiteNav from '../CrossSiteNav/CrossSiteNav';

import * as S from './Footer.styles';


export default function FooterSection() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <S.Footer id="site-footer" className={isHome ? 'homeEnv' : 'projectEnv'}>
      <S.InnerContentBox className="inner-content">
        <S.FooterMainBox className="footer-main">
          <BasicContact />
          <CrossSiteNav classNameProject={isHome ? '' : 'project'} />
        </S.FooterMainBox>
        <S.FooterBottomBox className="footer-bottom">
          <span>&copy; JH Portfolio {new Date().getFullYear()}</span>
          <Social />
        </S.FooterBottomBox>
      </S.InnerContentBox>
    </S.Footer>
  );
}