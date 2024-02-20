import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Basic from '../ContactPortal/BasicContact';
import Social from '../ContactPortal/SocilaContact';
import CrossSiteNav from '../CrossSiteNav/CrossSiteNav';

import * as S from './Header.styles';

const links = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Work',
    href: '/#work',
  },
] as const;

const GRACE_THRESHOLD = 12;

export default function HeaderSection() {
  const [isMenuFocused, setIsMenuFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFooterPage, setIsFooterPage] = useState(false);

  const { isScrollThresholdPassed } = useScrollThreshold({
    threshold: GRACE_THRESHOLD,
  });

  const isBackgroundShown = isScrollThresholdPassed || isMobileMenuOpen;

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const footerElement = document.getElementById('site-footer');
    const headerElement = document.getElementById('site-header');

    const handleScroll = () => {
      if (footerElement && headerElement) {
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
    setIsMenuFocused(prev => !prev);
  };

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
    // <S.Header
    //   id="site-header"
    //   className={`${isHome ? 'home' : 'project'} ${
    //     isMenuFocused ? 'open' : 'close'
    //   }`}
    // >
    //   <S.NavItem id="logo" onClick={handleHome}></S.NavItem>
    //   <S.MenuToggle
    //     onClick={handelMenuClick}
    //     className={`menu-toggle ${isMenuFocused ? 'x' : ''} ${
    //       isFooterPage ? 'footer-page' : ''
    //     }`}
    //   />
    //   <S.ContactMenu
    //     id="contact-menu"
    //     className={isMenuFocused ? 'open shadow' : ''}
    //   >
    //     <CrossSiteNav />
    //     <Basic />
    //     <Social />
    //   </S.ContactMenu>
    // </S.Header>
    <header aria-label="Primary" className="fixed top-0 z-40 w-full">
      <div>
        <div>
          <div className="grid grid-cols-3">
            <div className="flex items-center lg:hidden"></div>
            <nav
              aria-label="Primary"
              className="ms-4 hidden items-center gap-x-6 lg:felx"
            >
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  data-astro-prefetch
                  className="relative flex h-full items-center p-1 text-sm uppercase text-neutrals-50 after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100"
                >
                  {link.label}
                </a>
              ))}
              <div className='flex items-center justify-center'>
                <a
                href='/'
                title='Navigagte home'
                data-astro-prefetch
                className='hover:animate-jiggle'
                >
                  <img />
                </a>
              </div>
              <div className='flex items-center justify-end'>
                <button>
                  Show me
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
