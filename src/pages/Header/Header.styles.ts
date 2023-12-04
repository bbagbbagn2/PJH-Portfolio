import styled from 'styled-components';

export const Header = styled.header`
    &.header {
    }

    &#site-header {
        position: unset;

        @media (max-width: 650px) {
            padding-left: 8.5vw;
            padding-right: 8.5vw;
        }

        @media (min-width: 651px) and (max-width: 1129px) {
            padding-left: 3.5rem;
            padding-right: 3.5rem;
        }
    }
    
    &.project-header {
        padding-top: 3rem;
        padding-bottom: 3rem;
        width: 100%;
        height: 11.12em;
        max-height: 12rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .72rem;
        background: transparent;
        z-index: 1000;

        @media (min-width: 701px) {
            position: fixed;
            padding-left: 6em;
            padding-right: 6em;
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

    @media (max-width: 700px) {
        &#site-header {
            padding-top: 3rem;

            #contact-menu {
                font-size: 1.1em;
            }
        }

        &.project-header {
            padding-left: 3em;
            padding-right: 3em;
            position: absolute;

            #logo {
                z-index: 999;
            }
        }

        &.mobile {

        }
    }

    @media (min-width: 701px) {
        position: fixed;
        padding: 0 6em;

        .project-header {
            padding-left: 6em;
            padding-right: 6em;
        }
    }


`;

export const MenuToggle = styled.button`
    position: relative;
    margin: 0;
    margin-top: 0.699em;
    padding: 0;
    width: 2.78em;
    height: 2.09em;
    display: inline-flex;
    background: none;
    color: #3c8fdd;
    font-size: 100%;
    line-height: 1.15;
    cursor: pointer;
    z-index: 999;

    &.x {
        transform: scale(0.9);

        ::before {
            transform: rotate(45deg);
        }

        ::after {
            top: 0;
            width: 100%;
            transform: rotate(-45deg);
        }
    }

    :focus {
        outline-color: transparent;
    }

    ::before, ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        transition: 0.2s ease;
        transform: rotate(0deg);
        background-color: currentColor;
    }

    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        transition: 0.2s ease;
        transform: rotate(0deg);
        background-color: currentColor;
    }

    
`;

export const ContentMenu = styled.nav`
    padding: 3.473em;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    z-index: 998;

    @media (max-width: 350px) {
        padding: 2.347em;
    }

    @media (max-width: 700px) {
        /* Positioning */
        position: fixed;
        inset: 0;

        /* Demesions */
        width: 100vw;
        height: 100vh;

        /* Styling */
        background: #fff;
        font-size: 2.2em;

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

        a {
            color: #3c8fdd;
        }
    }

    @media (min-width: 701px) {
        position: absolute;
        top: 1.39em;
        right: 3.41em;
        width: 22.223em;
        font-size: 1.1em;
        transition: opacity 0.4s, box-shadow 0.4s;
        
        :not(.open) {
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
        }

        &.open.shadow {
            box-shadow: 0 10px 53px 0 rgba(72, 49, 212, .05);
        }

        &.open {
            ::before {
                transform: scale(1);
            }
        }

        ::before {
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