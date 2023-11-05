import React, { useRef } from 'react';

import Header from '../Header/Header.tsx';
import Profile from '../Profile/Profile.tsx';
import Features from '../Features/Features.tsx';
import Skill from '../Skill/Skill.tsx';
import Work from '../Work/Work.tsx';
import Contact from '../Contact/Contact.tsx';
import Footer from '../Footer/Footer.tsx';
import * as S from './MainCSS.ts';

export default function Main(): JSX.Element {
    return (
        <>
            <Header />
            <S.MainPageLayout tabIndex={-1}>
                    <Profile />
                    <Features />
                    <Skill />
                    <Work />
                    <Contact />
            </S.MainPageLayout>
            <Footer />
        </>
    );
}
