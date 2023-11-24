import React, { useState, useEffect } from "react";

import Basic from '../../literal-squce-drip/ContactPortal/BasicContact';
import CrossSiteNav from '../../literal-squce-drip/CrossSiteNav/index';

import * as S from "./Header.styles.ts";

export default function Header() {
    const [isMenuFocused, setIsMenuFocused] = useState(false);

    const handelMenuClick = () => {
        setIsMenuFocused((prev) => !prev);
    }

    const handleHome = () => {
        setIsMenuFocused(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <S.Header>
            <S.NavItem color='#FFF' onClick={handleHome}>HOME</S.NavItem>
            <S.MenuToggle
            type="button"
            onClick={handelMenuClick}
            className={isMenuFocused ? 'x' : ''}
             />
             <S.ContentMenu className={isMenuFocused ? 'open shadow' : ''}>
                <CrossSiteNav />
                <Basic />
             </S.ContentMenu>
        </S.Header>
    );
}