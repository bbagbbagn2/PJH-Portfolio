import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BasicContact: React.FC = () => {
    return (
        <StyledSocialContact>
            <li>
                <MyLink to="https://github.com/bbagbbagn2">Github</MyLink>
            </li>
        </StyledSocialContact>
    );
}

export default BasicContact;

const StyledSocialContact = styled.ul`
    position: relative;

    li {
        display: inline-block;

        &:not(:last-of-type) {
            margin-right: 2.5em;
        }
    }

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

