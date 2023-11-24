import React from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './Footer.styles';
import Basic from '../../literal-squce-drip/ContactPortal/BasicContact';
import Social from '../../literal-squce-drip/ContactPortal/SocilaContact';
import CrossSiteNav from '../../literal-squce-drip/CrossSiteNav/index';

type FooterProps = {
    isHomeFooter?: boolean;
    isProjectFooter?: boolean;
}

export default function Footer({  isHomeFooter, isProjectFooter }: FooterProps) {
    const location = useLocation();
    const isHome = isHomeFooter !== undefined ? isHomeFooter : location.pathname === '/';
    const isProject = isProjectFooter !== undefined ? isProjectFooter : location.pathname === '/project';

    return (
        <S.Footer className={isHome ? 'home' : isProject ? 'project' : ''}>
            <S.InnerContentBox>
                <S.FooterMainBox className='footer-main'>
                    <Basic />
                    <CrossSiteNav />
                </S.FooterMainBox>
                <S.FooterBottomBox className='footer-bottom'>
                    <span>&copy; JH Portfolio 2023</span>
                    <Social />
                </S.FooterBottomBox>
            </S.InnerContentBox>
        </S.Footer>
    )
}
