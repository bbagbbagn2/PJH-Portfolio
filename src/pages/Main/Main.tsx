import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header.tsx';
import Profile from '../Profile/Profile.tsx';
import Skill from '../Skill/Skill.tsx';
import Work from '../Work/Work.tsx';
import Contact from '../Contact/Contact.tsx';
import Footer from '../Footer/Footer';

export default function Main(): JSX.Element {
    return (
        <>
            <Header />
            <MainPageLayout>
                <MainPageRow>
                    <Profile />
                    <Skill />
                    <Work />
                    <Contact />
                </MainPageRow>
            </MainPageLayout>
            <Footer />
        </>
    );
}

const MainPageLayout = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: #1A1E23;
`;

const MainPageRow = styled.div`
    padding: 0 6%;
    display: grid;
`;