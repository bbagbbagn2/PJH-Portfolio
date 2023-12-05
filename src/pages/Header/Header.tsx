import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Basic from '../../literal-squce-drip/ContactPortal/BasicContact';
import Social from '../../literal-squce-drip/ContactPortal/SocilaContact'
import CrossSiteNav from '../../literal-squce-drip/CrossSiteNav/CrossSiteNav';

import * as S from './Header.styles';

type HeaderProps = {
    isHomeHeader?: boolean;
    isProjectHeader?: boolean;
}


export default function Header({ isHomeHeader, isProjectHeader }: HeaderProps) {
    const [isMenuFocused, setIsMenuFocused] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 700)
        };

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize',handleResize);
        }
    }, []);

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
    const isHome = location.pathname === '/';

    return (
        <S.Header
        id='site-header'
        className={`${isHome ? 'home' : 'project'} ${isMenuFocused ? 'open' : 'close'}`}
        >
            <S.NavItem
                id='logo'
                color='#FFF'
                onClick={handleHome}>
                HOME
            </S.NavItem>
            <S.MenuToggle
                type="button"
                onClick={handelMenuClick}
                className={`menu-toggle ${isMenuFocused ? 'x' : ''}`}
            />
            <S.ContactMenu id='contact-menu' className={isMenuFocused ? 'open shadow' : ''}>
                <CrossSiteNav />
                <Basic />
                <Social />
            </S.ContactMenu>
        </S.Header>
    );
}