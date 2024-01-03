import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ReactComponent as PersonalLogo } from '../logos/personal-logo.svg';

import theme from "../literal-sauce-drip/theme";

export default function Logo() {
    const location = useLocation();
    const [isProjectPage, setIsProjectPage] = useState(false);
    
    useEffect(() => {
        setIsProjectPage(location.pathname.startsWith('/project'))
    }, [location.pathname]);

    const logoFill = isProjectPage ? theme.colors.blue : theme.colors.lemon; 

    return (
        <a href="/">
            <svg><PersonalLogo fill={logoFill} /></svg>
        </a>
    );
};