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
            <MainPage>
                <Wrapper>
                    <Profile />
                    <Skill />
                    <Work />
                    <Contact />
                </Wrapper>
            </MainPage>
            <Footer />
        </>
    );
}

const MainPage = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: #1A1E23;
`;

const Wrapper = styled.div`
    padding: 0 6%;
    display: grid;
`;