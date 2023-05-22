import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import "../Fonts/Font.css";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
export default function Main() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();

    return (
        <>
            <Header />
            <Page>
                <div>
                    <Title>Contact Me</Title>
                    <Message>최대한 빠르고 정성스레 답장해드리겠습니다 :)</Message>
                </div>
                <ContactWrapper>
                    <ContactList>
                        <BsPhoneVibrate size="100" color="#98FB98" />
                        <ContactTitle>PHONE</ContactTitle>
                        <p>010 9207 8758</p>
                    </ContactList>
                    <ContactList>
                        <AiOutlineMail size="100" color="#98FB98"/>
                        <ContactTitle>EMAIL</ContactTitle>
                        <p>pyoungh137@gmail.com</p>
                    </ContactList>
                    <ContactList>
                        <BsGithub size="100" color="#98FB98"/>
                        <ContactTitle>GITHUB</ContactTitle>
                        <p>https://github.com/bbagbbagn2</p>
                    </ContactList>
                </ContactWrapper>
            </Page>
        </>)
}

const Page = styled.div`
position: fixed;
top: 50px;
width: 100%;
height: calc(var(--vh, 1vh) * 100);

display: grid;
grid-template-rows: 8% 1fr;
background: #1A1E23;
`;

const Title = styled.h1`
    color: #98FB98;
    font-size:60px;
    font-weight:bold;
    text-align:center;
    letter-spacing: 0;
    transition:1s;
    -webkit-transition:1s;
    -ms-transition:1s;
    position: relative;

    display: grid;
    place-items: center;
    place-content: center;
 `;

const Message = styled(Title)`
    color: white;
    font-size: 26px;
`;

const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
`;

const ContactList = styled.div`
    color: white;
    display: grid;
    place-items: center;
`;

const ContactTitle = styled.h1`
    font-family: Playfair Display;
`;