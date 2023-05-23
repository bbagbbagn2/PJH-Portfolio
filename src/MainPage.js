import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Profile from './pages/Profile/Profile';
import Skill from './pages/Skill/Skill';
import Work from './pages/Work/Work';

export default function Main() {
    return (
        <>
            <Header />
            <MainPage>
                <Wrapper>
                    <Profile />
                    <Skill />
                    <Work />
                </Wrapper>
            </MainPage>
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