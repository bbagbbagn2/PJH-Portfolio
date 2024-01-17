import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@_components/theme';

import HeaderSection from '@_components/Header/Header';
import Profile from '../Profile/Profile';
import Features from '../Features/Features';
import Carriageway from '../Carriageway/Carriageway';
import FooterSection from '@_components/Footer/Footer';

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderSection />
      <Profile />
      <Features />
      <Carriageway />
      <FooterSection />
    </ThemeProvider>
  );
}
