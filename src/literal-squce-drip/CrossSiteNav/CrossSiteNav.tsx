import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/index';

type CrossSiteNavProps = {
    classNameProject?: string;
}

const BasicContact: React.FC<CrossSiteNavProps> = ({ classNameProject }) => {
    return (
        <CrossSiteNav className={ classNameProject }>
            {classNameProject === 'project' && <NavItem href='/'>HOME</NavItem>}
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

