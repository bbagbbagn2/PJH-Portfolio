import React, { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

type NavItemProps = {
  href: string;
  clickFn?: (event: MouseEvent) => void;
  isShelfEnv?: boolean;
  workURL?: string;
  resumeURL?: string;
  external?: boolean;
  children?: ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({
  href,
  clickFn,
  isShelfEnv,
  workURL,
  resumeURL,
  external,
  children,
}) => {
  const handleClick = (event: MouseEvent) => {
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
        {...(external && { target: '_blank', rel: 'noreferrer noopener' })}
      >
        {children}
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
      /* Pseudo-element to create a visual effect */
      content: '';

      /* Positioning */
      position: absolute;
      top: 0;
      right: 0;

      /* Dimensions */
      width: 20%;
      min-width: 1em;
      height: 100%;

      /* Styling */
      background-color: currentColor;
      opacity: 0;
      transform: translateX(0);
      transform-origin: left;

      /* Transition effect */
      transition: 0.3s;

      /* Interaction */
      pointer-events: none;
    }
  }
`;
