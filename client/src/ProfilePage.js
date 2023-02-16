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
                    <Front>끈기</Front>
                    <Back>원리</Back>
                    <Left>효율</Left>
                    <Right>기록</Right>
                    <Top>소통</Top>
                    <Bottom>성장</Bottom>
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
    animation: rotate 50000ms linear infinite;
    display: grid;
    place-items: center;
    place-content: center;
    margin: auto;
    transform-style: preserve-3d;
    width: 100px;

    @keyframes rotate {
        100% {
          transform: rotateY(360deg) rotateX(720deg) rotateZ(1080deg);
        }
      }
`

const Front = styled.div`
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
   font-size: 40px;
   transform: translateZ(200px);
`
const Back = styled(Front)`
    transform: translateZ(-200px);
`;

const Left = styled(Front)`
    transform: translateX(-200px) rotateY(90deg);
`;
const Right = styled(Front)`
    transform: translateX(200px) rotateY(90deg);
`;
const Top = styled(Front)`
    transform: translateY(-200px) rotateX(90deg);
`;
const Bottom = styled(Front)`
    transform: translateY(200px) rotateX(90deg);
`;

const RightContainer = styled.div`
    display: grid;
    place-items: center;
    place-content: center;
`



