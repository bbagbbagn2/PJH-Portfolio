import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from './img/Profile.jpg';
import {ReactComponent as Github} from './img/github.svg';
import {ReactComponent as Notion} from './img/notion.svg';

export default function Profile() {
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
      
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();

   
    return (<>
        <Header>
            <HeaderMessage to='/' className="active">HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='#'>CONTACT</HeaderMessage>
            <ChannelContainer>
            <Github onClick={() => window.open('https://github.com/bbagbbagn2', '_blank')}/>
            <Notion onClick={() => window.open('https://concise-molybdenum-1ed.notion.site/c4ce189e86cf43e8858349a33ebb482d', '_blank')}/>
            </ChannelContainer>
        </Header>
        <ProfilePage>
            <LeftContainer>
                <ProfileContainer>
                    <Photo src={profile} alt="profile" />
                </ProfileContainer>
            </LeftContainer>
            <RightContainer>
            <IntroduceContainer>
                    <h1>FrontEnd Developer</h1>
                    <h3>• 맡은 바는 끝까지 하는 끈기를 가지고 있습니다.</h3>
                    <h3>• 결과보다는 원리를 더 알고자 하는 편입니다.</h3>
                    <h3>• 리팩토링을 통해 더 효율적인 개발을 하고자 합니다.</h3>
                    <h3>• 일정 관리 및 회의 내용을 기록하여 이용할 수 있습니다.</h3>
                    <h3>• 팀원들과의 소통을 잘 할 수 있습니다.</h3>
                </IntroduceContainer>
            </RightContainer>
        </ProfilePage>
    </>)
}
const Typing = styled.h1`
    font-size: 20px;
    min-width: 11px;
    white-space: nowrap;
    margin: 0;
    color: transparent;
    transform: translate(-50%, -50%);
    
    &:before{
        content: "FrontEnd Developer";
        position: absolute;
        width: 100%;
        height: 100%;
        color: black;
        overflow: hidden;
        border-right: 1px solid black;
        animation: typing 5s steps(31) infinite;
    }
    
    @keyframes typing{
        0% {
          width: 0%;
        }
        50% {
          width: 100%;
        }
        100% {
          width: 0%;
        }
`;
const ChannelContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,40px);
`

const Header = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    
    display: grid;
    grid-template-columns: repeat(5,10%);
    place-items: center;
    place-content: center;

    background: #1A1E23;
    font-size: 16px;
    color: white;
    z-index: 999;
`;

const HeaderMessage = styled(Link)`
    transition: 0.5s ease;
    opacity: .4;
    color: #fff;
    text-transform: uppercase;
    display: block;
    letter-spacing: .2em;
    font-size: 14px;

    &:hover{
        opacity: .7;
    }
`;

const ProfilePage = styled.div`
    position: fixed;
    top: 50px;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);

    display: grid;
    grid-template-columns: 50% 50%; 
    place-items: center;
    place-content: center;

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

const IntroduceContainer = styled.div`
    width: 100%;
    
    display: grid;
    place-content: center;
`
const RightContainer = styled.div`
    display: grid;
    place-items: center;
    place-content: center;
`



