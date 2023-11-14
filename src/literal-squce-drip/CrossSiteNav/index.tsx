import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavItem from '../NavItem/index';

const BasicContact: React.FC = () => {
    return (
        <CrossSiteNav>
                <NavItem href="/project">내 프로젝트</NavItem>
                <NavItem href="#">내 이력서</NavItem>
        </CrossSiteNav>
    );
}

export default BasicContact;

const CrossSiteNav = styled.ul`
    a {
        color: currentColor;
    }
`;

