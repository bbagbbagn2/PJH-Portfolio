import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Basic from '../ContactPortal/BasicContact';
import Social from '../ContactPortal/SocilaContact'
import CrossSiteNav from '../CrossSiteNav/CrossSiteNav';

import * as S from './Header.styles';

export default function HeaderSection() {
    const [isMenuFocused, setIsMenuFocused] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 700);
    const [isFooterPage, setIsFooterPage] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 700)
        };

        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize',handleResize);
        };
    }, []);

    useEffect(() => {
        const footerElement = document.getElementById('site-footer');
        const headerElement = document.getElementById('site-header');

        const handleScroll = () => {
            if(footerElement && headerElement){
                const footerRect = footerElement?.getBoundingClientRect();
                const headerRect = headerElement?.getBoundingClientRect();

                setIsFooterPage(footerRect.top < headerRect.top);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
                onClick={handleHome}>
            </S.NavItem>
            <S.MenuToggle
                type="button"
                onClick={handelMenuClick}
                className={`menu-toggle ${isMenuFocused ? 'x' : ''} ${isFooterPage ? 'footer-page' : ''}`}
            />
            <S.ContactMenu id='contact-menu' className={isMenuFocused ? 'open shadow' : ''}>
                <CrossSiteNav />
                <Basic />
                <Social />
            </S.ContactMenu>
        </S.Header>
    );
};