import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.footer`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0B2B40;
    color: #DBF227;
    font-size: 1.2em;

    @media screen and (min-width: 701px) {
        @media screen and (max-height: 1199px) {
            height: 100vh;
        }
    }
`;

export const InnerContentBox = styled.div`
    padding-top: 8rem;
    padding-bottom: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 701px) {
        padding: 0 10rem;
    }

    @media screen and (min-width: 701px) and (max-width: 1500px) {
        max-width: 1500px;
    }

    @media screen and (min-width: 1501px) {
        max-width: 1760px;
    }
`;

export const FooterMainBox = styled.div`
    margin-bottom: 7.4em;
    width: 100%;
    display: flex;

    @media screen and (min-width: 700px) {
        transition: transform 0.5s, opacity 0.2s;
        transition-delay: 300ms;
    }
`;

export const ContactBox = styled.div`
    position: relative;
    font-size: 1em;
    line-height: 2.5;

    @media screen and (min-width: 461px) {
        margin-right: 18vw;
    }
`;

export const HelloSpan = styled.span`
    color: #CBC9E2;
    letter-spacing: 0.25em;
    text-transform: uppercase;
`;

export const MyList = styled.ul`
    font-size: 1.15em;
`;

export const MyLink = styled(Link)`
    color: currentColor;

    @media screen and (hover: hover) and (any-pointer: fine) {
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(186, 221, 118, 0.7);
    font-size: 1.15em;
    transform: translate3d(0, 0, 0);

    @media screen and (min-width: 700px) {
        transition: transform 0.5s, opacity 0.2s;
        transition-delay: 500ms;
    }
`;

export const SocialContactList = styled.ul`
    position: relative;
`;

export const SocialContactItem = styled.li`
    margin-right: 2.5em;
`;

