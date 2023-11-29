import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Basic from '../../literal-squce-drip/ContactPortal/BasicContact';
import CrossSiteNav from '../../literal-squce-drip/CrossSiteNav/CrossSiteNav';

import * as S from './Header.styles';

type HeaderProps = {
    isHomeHeader?: boolean;
    isProjectHeader?: boolean;
}

export default function Header({ isHomeHeader, isProjectHeader }: HeaderProps) {
    const [isMenuFocused, setIsMenuFocused] = useState(false);

    const handelMenuClick = () => {
        setIsMenuFocused((prev) => !prev);
    }

    const handleHome = () => {
        setIsMenuFocused(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const location = useLocation();
    const isHome = isHomeHeader !== undefined ? isHomeHeader : location.pathname === '/';
    const isProject = isProjectHeader !== undefined ? isProjectHeader : location.pathname === '/project';

    return (
        <S.Header
            id='site-header'
            className={isHome ? 'home-header' : isProject ? 'project-header' : ''}>
            <S.NavItem
                color='#FFF'
                onClick={handleHome}>
                HOME
            </S.NavItem>
            <S.MenuToggle
                type="button"
                onClick={handelMenuClick}
                className={isMenuFocused ? 'x' : ''}
            />
            <S.ContentMenu className={isMenuFocused ? 'open shadow' : ''}>
                <CrossSiteNav />
                <Basic />
            </S.ContentMenu>
        </S.Header>
    );
}