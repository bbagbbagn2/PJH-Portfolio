import styled, { css } from 'styled-components';

import theme, { colors } from '../theme';

export const Header = styled.header`
  width: 100%;
  max-height: 12rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  font-size: ${props =>
    props.className?.includes('project') ? '0.72rem' : '1rem'};
  height: ${props =>
    props.className?.includes('home') ? theme.header.height : 'unset'};

  ${props =>
    props.className?.includes('project') &&
    css`
      padding-top: 3rem;
      padding-bottom: 3rem;
    `}

  @media (max-width: 700px) {
    padding-left: 3em;
    padding-right: 3em;

    ${props =>
      props.className?.includes('close') &&
      css`
        position: absolute;
      `}

    ${props =>
      props.className?.includes('open') &&
      css`
        position: fixed;
        top: 0;
        bottom: auto;

        #logo,
        .menu-toggle {
          color: ${theme.colors.toggle} !important;
        }
      `}
  }

  @media (min-width: 701px) {
    position: fixed;
    padding-left: ${theme.header.padding};
    padding-right: ${theme.header.padding};
  }

  &.home {
    @media (max-width: 580px) {
      font-size: 1.2rem;

      > button {
        color: #dbf227;
      }
    }

    @media (max-width: 700px) {
      padding-left: 3em;
      padding-right: 3em;
      position: absolute;

      &.open {
        padding-left: 3em;
        padding-right: 3em;
        top: 0;
        bottom: auto;
        position: fixed;
      }
    }
  }

  &.project {
    position: unset;

    @media (max-width: 650px) {
      padding-left: 8.5vw;
      padding-right: 8.5vw;
    }

    @media (max-width: 700px) {
      padding-top: 3rem;

      #contact-menu {
        font-size: 1.1rem;
      }
    }

    @media (min-width: 651px) and (max-width: 1129px) {
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    }

    &.open {
      top: 0;
      bottom: auto;
    }

    #logo {
      z-index: 999;
    }
  }

  :focus {
    outline-width: 0.2em;
    outline-style: dashed;
    outline-color: transparent;
  }

  button::before {
    top: 0;
  }

  button::after {
    top: 1.13em;
    right: 0;
    width: 72%;
  }
`;

export const MenuToggle = styled.button`
  position: relative;
  margin-top: 0.699em;
  width: 2.78em;
  height: 2.09em;
  background: none;
  color: ${theme.colors.toggle};
  display: inline-flex;
  cursor: pointer;
  z-index: 999;

  &.x {
    transform: scale(0.9);

    &::before {
      transform: rotate(45deg);
      color: ${theme.colors.toggle};
    }

    &::after {
      top: 0;
      width: 100%;
      transform: rotate(-45deg);
      color: ${theme.colors.toggle};
    }
  }

  &.footer-page {
    color: ${theme.colors.toggle};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    transition: 0.2s ease;
    transform: rotate(0deg);
    background-color: ${theme.colors.toggle};
  }

  &::before {
    top: 0;
  }

  &::after {
    top: 1.13em;
    right: 0;
    width: 72%;
  }
`;

export const ContactMenu = styled.nav`
  padding: 3.473em;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  user-select: none;
  z-index: 998;

  a {
    color: ${theme.colors.toggle};
  }

  @media (max-width: 350px) {
    padding: 2.347em;
  }

  @media (max-width: 700px) {
    /* Positioning */
    position: fixed;
    inset: 0;

    /* Dimensions */
    width: 100vw;
    height: 100vh;

    /* Styling */
    background: #fff;
    font-size: 2.2rem;

    /* Transitions */
    transition:
      opacity 0.3s,
      visibility 0.3s;

    /* Layout */
    justify-content: space-around;

    &.open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    &:not(.open) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    ul {
      font-size: 1em;
      line-height: 2.5;
    }
  }

  @media (min-width: 701px) {
    position: absolute;
    top: 1.39em;
    right: 3.41em;
    width: 22.223em;
    font-size: 1.1em;
    transition:
      opacity 0.4s,
      box-shadow 0.4s;
    border-radius: 1rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${colors.bg300};
      transition: 0.3s;
      transform-origin: top right;
      border-radius: 1rem;
    }

    &:not(.open) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;

      &::before {
        transform: scaleX(0.3826) scaleY(0.27);
      }

      .cross-site-nav {
        opacity: 0;
      }

      .cross-site-nav {
        transform: translateY(50px);
      }
    }

    &.open {
      &::before {
        transform: scale(1);
      }

      .cross-site-nav {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &.open.shadow {
      box-shadow:
        rgba(0, 0, 0, 0.07) 0px 1px 1px,
        rgba(0, 0, 0, 0.07) 0px 2px 2px,
        rgba(0, 0, 0, 0.07) 0px 4px 4px,
        rgba(0, 0, 0, 0.07) 0px 8px 8px,
        rgba(0, 0, 0, 0.07) 0px 16px 16px;
    }

    .cross-site-nav {
      transition:
        opacity,
        transition 0.3s;
    }

    .cross-site-nav {
      margin: 1.2em, 0;
      transition-delay: 200ms;
    }

    ul {
      margin: 1.2em 0;
      font-size: 1.15em;
      line-height: 2.5;
      opacity: 1;
      transform: translateY(0);
      transition-duration: 0s, 0.3s;
      transition-timing-function: ease, ease;
      transition-property: opacity, transform;
      transition-delay: 200ms;
    }

    a {
      color: ${colors.text};
    }

    div {
      margin: 0;
      margin-top: 0.8em;

      span {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.2s 400ms;
      }

      ul {
        margin: 0 0 2.78em;
        opacity: 1;
        transform: translateY(0);
        transition:
          opacity,
          transform 0.3s;
        transition-delay: 400ms;
      }
    }
  }
`;

export const NavItem = styled.p<{ color?: string }>`
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  color: ${props => props.color || `${colors.text}`};

  &:hover {
    color: #ffffff;
  }
`;
