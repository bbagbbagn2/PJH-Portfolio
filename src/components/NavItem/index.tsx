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

export default function NavItem({
  href,
  clickFn,
  isShelfEnv,
  workURL,
  resumeURL,
  external,
  children,
}: NavItemProps) {
  const handleClick = (event: MouseEvent) => {
    // 내부 링크인 경우 기본 동작 취소
    if (href && href.charAt(0) === '#') {
      event.preventDefault();
    }

    // 사용자 정의 클릭 이벤트 호출
    if (clickFn) {
      clickFn(event);
    }

    // Shelf 환경에서 다른 경로로 이동해야 하는 경우
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
}

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
