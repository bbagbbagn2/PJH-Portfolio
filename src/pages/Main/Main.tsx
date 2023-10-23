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
    const outerDivRef = useRef<HTMLDivElement | null>(null);

    const wheelHandler = (e: any) => {
        e.preventDefault();
        const { deltaY } = e;
        const { scrollTop } = outerDivRef.current!;
        const pageHeight = window.innerHeight;

        let targetPage = Math.floor(scrollTop / pageHeight);

        if (deltaY > 0) {
            targetPage++;
        } else {
            targetPage--;
        }

        targetPage = Math.min(Math.max(targetPage, 0), 2);

        const scrollTo = targetPage * pageHeight;

        outerDivRef.current!.scrollTo({
            top: scrollTo,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Header />
            <S.MainPageLayout>
                <S.MainPageRow>
                    <div onWheel={wheelHandler} ref={outerDivRef} style={{ overflowY: 'scroll', height: '100vh' }}>
                    <Profile />
                    <Features />
                    <Skill />
                    <Work />
                    <Contact />
                    </div>
                </S.MainPageRow>
                <Footer />
            </S.MainPageLayout>
        </>
    );
}
