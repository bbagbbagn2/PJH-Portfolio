import styled, { css } from 'styled-components';
import theme from '../../literal-sauce-drip/theme';

export const Header = styled.header`
    /* Dimensions */
    width: 100%;
    max-height: 12rem;

    /* Styling */
    background: transparent;

    /* Layout */
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Z-index*/
    z-index: 1000;

    /* Font size and height based on props */
    font-size: ${props => (props.className?.includes('project') ? '0.72rem' : '1rem')};
    height: ${props => (props.className?.includes('home') ? theme.header.height : 'unset')};

    /* Additional styling for project class */
    ${(props) =>
        props.className?.includes('project') &&
        css`
            padding-top: 3rem;
            padding-bottom: 3rem;
        `
    }

    @media (max-width: 700px) {
        padding-left: 3em;
        padding-right: 3em;

        ${(props) =>
        props.className?.includes('close') &&
        css`
            position: absolute;
        `}

        ${(props) =>
        props.className?.includes('open') &&
        css`
            position: fixed;
            top: 0;
            bottom: auto;

            #logo, .menu-toggle {
                color: ${theme.colors.blue} !important;
            }
        `}
    }

    @media (min-width: 701px) {
        position: fixed;
        padding-left: ${theme.header.padding};
        padding-right: ${theme.header.padding};

        .crosss-site-nav {
            line-height: 2.5;
            font-size: 1.15em;
        }
    }
    
    /* Home Header Styles */
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

    /* Project Header Styles */
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
    /* Positioning */
    position: relative;
    margin-top: 0.699em;
    
    /* Dimensions */
    width: 2.78em;
    height: 2.09em;

    /* Styling */
    background: none;
    color: ${theme.colors.blue};

    /* Layout */
    display: inline-flex;

    /* interaction */
    cursor: pointer;

    /* Z-index */
    z-index: 999;

    &.x {
        transform: scale(0.9);

        &::before {
            transform: rotate(45deg);
            color: ${theme.colors.blue};
        }

        &::after {
            top: 0;
            width: 100%;
            transform: rotate(-45deg);
            color: ${theme.colors.blue};
        }
    }

    &.footer-page {
        color: ${theme.colors.lemon};
    }

    &::before, &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        transition: 0.2s ease;
        transform: rotate(0deg);
        background-color: currentColor;
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
        color: ${theme.colors.blue};
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
        transition: opacity .3s, visibility .3s;

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
        transition: opacity 0.4s, box-shadow 0.4s;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #f9f9f9;
            transition: 0.3s;
            transform-origin: top right;
        }

        &:not(.open) {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            &::before {
                transform: scaleX(.3826) scaleY(.27);
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
            box-shadow: 0 10px 53px 0 rgba(72, 49, 212, .05);
        }

        .cross-site-nav {
            transition: opacity, transition 0.3s;
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
            color: #3c8fdd;
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
                transition: opacity, transform 0.3s;
                transition-delay: 400ms;
            }
        }
    }    
`;

export const NavItem = styled.p<{ color?: string }>`
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    color: ${(props) => (props.color || "#939DAB")};

    &:hover{
        color: #FFFFFF;
    }
`;