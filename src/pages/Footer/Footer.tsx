import React from 'react';
import { useLocation } from 'react-router-dom';

import Basic from '../../literal-squce-drip/ContactPortal/BasicContact';
import Social from '../../literal-squce-drip/ContactPortal/SocilaContact';
import CrossSiteNav from '../../literal-squce-drip/CrossSiteNav/CrossSiteNav';

import * as S from './Footer.styles';

type FooterProps = {
    isHomeFooter?: boolean;
    isProjectFooter?: boolean;
}

export default function Footer({ isHomeFooter, isProjectFooter }: FooterProps) {
    const location = useLocation();
    const isHome = isHomeFooter !== undefined ? isHomeFooter : location.pathname === '/';
    const isProject = isProjectFooter !== undefined ? isProjectFooter : location.pathname.startsWith('/project');

    return (
        <S.Footer
            id="site=footer"
            className={isHome ? 'home-footer' : isProject ? 'project-footer' : ''}>
            <S.InnerContentBox>
                <S.FooterMainBox>
                    <Basic />
                    <CrossSiteNav classNameProject={isProject ? 'project' : ''} />
                </S.FooterMainBox>
                <S.FooterBottomBox>
                    <span>&copy; JH Portfolio 2023</span>
                    <Social />
                </S.FooterBottomBox>
            </S.InnerContentBox>
        </S.Footer>
    )
}
