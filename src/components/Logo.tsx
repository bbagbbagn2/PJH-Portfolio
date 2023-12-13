import React from "react";

import { ReactComponent as PersonalLogo } from '../logos/personal-logo.svg';

export default function Logo() {
    return (
        <a href="/">
            <svg><PersonalLogo /></svg>
        </a>
    );
};