import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../literal-sauce-drip/theme';

import HeaderSection from '../Header/Header';
import Profile from '../Profile/Profile';
import Features from '../Features/Features';
import Skill from '../Skill/Skill';
import Carriageway from '../Carriageway/Carriageway';
import FooterSection from '../Footer/Footer';

export default function Main() {
    return (
        <ThemeProvider theme={theme}>
            <HeaderSection />
            <Profile />
            <Features />
            <Skill />
            <Carriageway />
            <FooterSection />
        </ThemeProvider>
    );
}
