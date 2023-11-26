import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/index';

const BasicContact: React.FC = () => {
    return (
        <StyledSocialContact>
                <NavItem href="https://github.com/bbagbbagn2" external>GitHub</NavItem>
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