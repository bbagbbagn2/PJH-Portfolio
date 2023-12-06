import React from 'react';
import { useLocation } from 'react-router-dom';

import Basic from '../../literal-sauce-drip/ContactPortal/BasicContact';
import Social from '../../literal-sauce-drip/ContactPortal/SocilaContact';
import CrossSiteNav from '../../literal-sauce-drip/CrossSiteNav/CrossSiteNav';

import * as S from './Footer.styles';

export default function Footer() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <S.Footer            
            id="site-footer"
            className={isHome ? 'homeEnv' : 'projectEnv'}>
            <S.InnerContentBox className='inner-content'>
                <S.FooterMainBox className='footer-main'>
                    <Basic />
                    <CrossSiteNav classNameProject={isHome ? '' : 'project'} />
                </S.FooterMainBox>
                <S.FooterBottomBox className='footer-bottom'>
                    <span>&copy; JH Portfolio {new Date().getFullYear()}</span>
                    <Social />
                </S.FooterBottomBox>
            </S.InnerContentBox>
        </S.Footer>
    )
}
