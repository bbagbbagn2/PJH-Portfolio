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
                    <ContactContainer>
                    <ContactWrapper>
                        <MyContactContainer>
                            <MyContactWrapper>
                                <ContactTitleWrapper>
                                    <ContactTitle>Contact</ContactTitle>
                                </ContactTitleWrapper>
                                <ContactItemWrapper>
                                </ContactItemWrapper>
                            </MyContactWrapper>
                        </MyContactContainer>
                    </ContactWrapper>
                </ContactContainer>
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

const ContactContainer = styled.div`
    height: 780px;
    display: grid;
    justify-items: center;
`;

const ContactWrapper = styled.div`
    width: 50vw;
    height: 500px;
    background: #FFFFFF;
    padding: 0 10%;
`;

const MyContactContainer = styled.div``;
const MyContactWrapper   = styled.div``;
const ContactTitleWrapper = styled.div``;

const ContactTitle = styled.h5`
    font-size: 24px;
    color: #1A1E23;
`;

const ContactItemWrapper = styled.div`

`;
