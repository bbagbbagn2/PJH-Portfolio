import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BasicContact: React.FC = () => {
    return (
        <CrossSiteNav>
            <li>
                <MyLink to="/project">내 프로젝트</MyLink>
            </li>
            <li>
                <MyLink to="#">내 이력서</MyLink>
            </li>
        </CrossSiteNav>
    );
}

export default BasicContact;

const CrossSiteNav = styled.ul`
    a {
        color: currentColor;
    }
`;

const MyLink = styled(Link)`
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

