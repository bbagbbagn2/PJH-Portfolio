import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Footer = styled.footer`
    margin-top: 7rem;
    position: relative;
    height: unset;
    background: #0B2B40;    
    color: #DBF227;
    display: flex;
    align-items: center;
    user-select: auto;
    z-index: 3;

    li a {
        color: currentColor;
    }

    .footer-main,
    .footer-bottom {
        width: 100%;
        display: flex;

        ${({ shelfEnv }) => !shelfEnv &&
        css`
            @media (min-width: 700px) {
                transition: transform 0.5s opacity 0.2s;
            }           
        `}
    }
`;

export const InnerContentBox = styled.div`
    padding-top: 5rem;
    padding-bottom: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 701px) {
        padding-left: 10rem;
        padding-right: 10rem;
    }

    @media (min-width: 701px) and (max-width: 1500px) {
        max-width: 1500px;
    }

    @media (min-width: 1501px) {
        max-width: 1760px;
    }
`;

export const FooterMainBox = styled.div`
    margin-bottom: 7.4em;

    @media (min-width: 700px) {
        transition: transform 0.5s, opacity 0.2s;
        transition-delay: 300ms;
    }

    @media (max-width: 420px) {
        flex-direction: column;
    }

    > ul {
        margin-top: 2.05em;
        font-size: 1.15em;
        line-height: 2.5;
    }
`;

export const StyledBasicContent = styled.div`
    position: relative;
    font-size: 1em;
    line-height: 2.5;

    @media (min-width: 461px) {
        margin-right: 18vw;
    }

    ul {
        font-size: 1.15em;
    }

    a {
        color: currentColor;
    }
`;

export const HelloSpan = styled.span`
    color: #CBC9E2;
    letter-spacing: 0.25em;
    text-transform: uppercase;
`;

export const ContactList = styled.ul`
    font-size: 1.15em;
`;

export const MyList = styled(ContactList)`
    margin-top: 2.05em;
    line-height: 2.5;
`;

export const MyLink = styled(Link)`
    color: currentColor;

    @media (hover: hover) and (any-pointer: fine) {
        position: relative;

        :after {
            content: "";
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
            transition: .3s;
            pointer-events: none;
        }

        :hover::after {
            opacity: .2;
            transform: translateX(0.5em);
        }
    }
`;

export const FooterBottomBox = styled.div`
    padding-top: 3em;
    justify-content: space-between;
    border-top: 1px solid rgba(186, 221, 118, 0.7);
    font-size: 1.15em;

    @media (min-width: 700px) {
        transition: transform 0.5s, opacity 0.2s;
        transition-delay: 500ms;
    }

    @media (max-width: 460px) {
            display: none;
    }
`;

export const SocialContactList = styled.ul`
    position: relative;
`;

export const SocialContactItem = styled.li`
    margin-right: 2.5em;
`;

