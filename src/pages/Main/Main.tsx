import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';


import { theme } from '../../base/theme';
import { CURRENT_SECTION, HEADER_COMPACT } from '../../constants';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Features from '../Features/Features';
import Skill from '../Skill/Skill';
import Carriageway from '../Carriageway/Carriageway';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Main() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <main>
                <Profile />
                <Features />
                <Skill />
                <Carriageway />
            </main>
            <Footer /> 
        </ThemeProvider>
    );
}
