import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
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
                    <Message fontSize="40px" fontWeight="1000">성장하는 Front-End Developer</Message>
                    <Message fontSize="22px" fontWeight="600">• 맡은 바는 끝까지 하는 끈기를 가지고 있습니다.</Message>
                    <Message fontSize="22px" fontWeight="600">• 결과보다는 원리를 더 알고자 하는 편입니다.</Message>
                    <Message fontSize="22px" fontWeight="600">• 리팩토링을 통해 더 효율적인 개발을 하고자 합니다.</Message>
                    <Message fontSize="22px" fontWeight="600">• 일정 관리 및 회의 내용을 기록하여 이용할 수 있습니다.</Message>
                    <Message fontSize="22px" fontWeight="600">• 팀원들과의 소통을 잘 할 수 있습니다.</Message>
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

    
    background: #98fb98;
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
const Message = styled.p`
    font-size: ${(props)=>props.fontSize};
    font-weight: ${(props)=>props.fontWeight};
`;
const RightContainer = styled.div`
    display: grid;
    place-items: center;
    place-content: center;
`



