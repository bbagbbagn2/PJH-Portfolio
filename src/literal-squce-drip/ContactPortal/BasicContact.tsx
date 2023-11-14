import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BasicContact: React.FC = () => {
    return (
        <StyledBasicContact>
            <SayHello>say hello</SayHello>
            <ul>
                <li>
                    <MyLink to="#">pyoungh137@gmail.com</MyLink>
                </li>
                <li>
                    <MyLink to="#">010.9207.8758</MyLink>
                </li>
            </ul>
        </StyledBasicContact>
    );
}

export default BasicContact;

const StyledBasicContact = styled.div`
    position: relative;
    font-size: 1em;
    line-height: 2.5;

    ul {
        font-size: 1.15em;
    }

    a {
        color: currentColor;
    }

    @media (min-width: 461px) {
        margin-right: 18vw;
    }
`;

const SayHello = styled.span`
    color: #cbc9e2;
    letter-spacing: 0.25em;
    text-transform: uppercase;
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

