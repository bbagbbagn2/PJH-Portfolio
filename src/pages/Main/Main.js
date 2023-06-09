import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Skill from '../Skill/Skill';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function Main() {
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