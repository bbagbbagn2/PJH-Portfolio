import React from 'react';
import styled from 'styled-components';
import Header from './pages/Header';
import Profile from './pages/Profile/Profile';
import Skill from './pages/Skill/Skill';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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
    height: 880px;
    display: grid;
    justify-items: center;
`;

const ContactWrapper = styled.div`
    width: 40vw;
    height: 510px;
    background: #FFFFFF;
    padding: 60px 10%;
    box-shadow: 0px 1px 25px 4px rgba(234,234,234,0.3);
`;

const MyContactContainer = styled.div`
    height: 100%;
`;

const MyContactWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 45% 1fr;
`;

const ContactTitle = styled.h5`
    margin-bottom: 0;
    text-align: center;
    font-size: 35px;
    color: #1A1E23;
`;

const ContactItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ContactMessage = styled.p`
    text-align: center;
    line-height: 1.9em;
    font-size: 15px;
    color: #1A1E23;
`;

const ContactItem = styled(ContactMessage)`
    margin: 0;
`;


const ContactList = styled.div`
    color: #1A1E23;
    display: grid;
    place-items: center;
`;

const ItemTitle = styled.h1``;