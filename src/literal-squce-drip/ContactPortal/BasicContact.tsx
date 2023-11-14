import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/index'
const BasicContact: React.FC = () => {
    return (
        <StyledBasicContact>
            <SayHello>say hello</SayHello>
            <ul>
                <NavItem href="#">pyoungh137@gmail.com</NavItem>
                <NavItem href="#">010.9207.8758</NavItem>

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