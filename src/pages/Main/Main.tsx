import React from 'react';
import Header from '../Header/Header.tsx';
import Profile from '../Profile/Profile.tsx';
import Skill from '../Skill/Skill.tsx';
import Work from '../Work/Work.tsx';
import Contact from '../Contact/Contact.tsx';
import Footer from '../Footer/Footer.tsx';
import * as S from './MainCSS.ts';

export default function Main(): JSX.Element {
    return (
        <>
            <Header />
            <S.MainPageLayout>
                <S.MainPageRow>
                    <Profile />
                    <Skill />
                    <Work />
                    <Contact />
                </S.MainPageRow>
                <Footer />
            </S.MainPageLayout>
        </>
    );
}
