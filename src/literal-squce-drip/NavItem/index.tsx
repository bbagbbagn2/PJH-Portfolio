import React, { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

interface NavItemProps {
    href: string;
    clickFn?: (event: MouseEvent) => void;
    isShelfEnv?: boolean;
    workURL?: string;
    resumeURL?: string;
    external?: boolean;
    children?: ReactNode;
}
const NavItem: React.FC<NavItemProps> = (props) => {
  const { href, clickFn, isShelfEnv, workURL, resumeURL} = props;

  const handleClick = (event: MouseEvent) => {
    const {href} = props;
    if (href && href.charAt(0) === '#') {
        event.preventDefault();
    }

    if (clickFn) {
        clickFn(event);
    }

    if (
        isShelfEnv &&
        window.location.pathname !== href &&
        ![workURL, resumeURL].includes(href)
    ) {
        event.preventDefault();
        window.location.href = href;
    }
  };

  return (
    <li>
      <NavItemLink
        href={href}
        onClick={handleClick}
        target={props.external ? '_blank' : ''}
        rel={props.external ? 'noreferrer noopener' : ''}
      >
        {props.children}
      </NavItemLink>
    </li>
  );
};

export default NavItem;

const NavItemLink = styled.a`
     @media (hover: hover) and (any-pointer: fine) {
        position: relative;

        &:hover::after {
            opacity: 0.2;
            transform: translateX(0.5em);
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 20%;
            min-width: 1em;
            height: 100%;
            background-color: currentColor;
            opacity: 0;
            transform: translateX(0);
            transform-origin: left;
            transition: 0.3s;
            pointer-events: none;
        }
    }
`


