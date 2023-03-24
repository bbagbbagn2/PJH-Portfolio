import React from 'react';
import styled from 'styled-components';
import profile from './img/Profile.jpg';
import Header from './Header.js';

export default function Profile() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    return (<>
        <Header />
        <ProfilePage>
            <LeftContainer>
                <ProfileContainer>
                    <Photo src={profile} alt="profile" />
                </ProfileContainer>
            </LeftContainer>
            <RightContainer>
                <IntroduceContainer>
                    <About>ABOUT</About>
                    <Title>Developer</Title>
                    <Message>저는 끈기로 성장하는 개발자 박지훈입니다. 저는 디자인을 포함한 전체 프론트엔드 반응형 웹 프로젝트 개발 경험이 있습니다. 저는 주기적으로 커뮤니케이션을 하며 개발하는 것을 선호합니다.</Message>
                </IntroduceContainer>
            </RightContainer>
        </ProfilePage>
    </>)
}

const ProfilePage = styled.div`
    position: fixed;
    top: 50px;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);

    display: grid;
    grid-template-columns: 50% 50%; 
    place-items: center;
    place-content: center;

    
    background: #1A1E23;
    color: black;
    font-size: 16px;

    overflow: hidden;
`
const LeftContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    place-items: center;
    place-content: center;
    padding-bottom: 5%;
`

const ProfileContainer = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    place-items: center;
    place-content: center;
`

const Photo = styled.img`
    position: absolute;
    width: 50%;
    height: 100%;
    display: grid;
    place-items: center;
    place-content: center;
`
const RightContainer = styled.div`
    height: 100%;
    width: 83.333333%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    place-items: center;
    place-content: center;
`

const IntroduceContainer = styled.div`
    width: 100%;    
    height: 100%;
    margin: auto;
    

`
const About = styled.h2`
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    margin:0;
    margin-bottom: 1rem;

    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    tab-size: 4;

    color: #98fb98;
`;
const Title = styled.h3`
    display: block;
    margin: 0;
    margin-bottom: 2rem;

    font-size: 3rem;
    line-height: 1;
    font-weight: 700;

    color: rgb(255,254,250);
`;
const Message = styled.p`
    color: white;
    line-height: 1.625;
    tab-size: 4;
    color: rgb(255,254,250,0.6);
`;





