import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from './img/박지훈.jpg'

export default function Profile() {
    return (<>
    <Header>
        <HeaderMessage to = '/home'>Home</HeaderMessage>
        <div/>
        <HeaderMessage to ='#'>About</HeaderMessage>
        <HeaderMessage to='#'>History</HeaderMessage>
        <HeaderMessage to='#'>Activity</HeaderMessage>
    </Header>
        <ProfilePage>
            <LeftContainer>
                <ProfileContainer>
                <div>사진 및 연락처
                <Photo src = {profile} alt="profile"/>
                </div>
                </ProfileContainer>
                <IntroduceContainer>
                    <div>간단한 소개</div>
                </IntroduceContainer>
            </LeftContainer>
            <RightContainer>
                <div>대략적인 스킬 및 활동</div> 
            </RightContainer>
        </ProfilePage>
    </>)
}

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 30px;
    
    display: grid;
    grid-template-columns: 8% 1fr repeat(3,8%);
    padding: 10px;

    background: black;
    font-size: 16px;
    color: white;
    z-index: 999;
`
const HeaderMessage = styled(Link)`
    color: white;
    transition-duration: 0.5s;
    &:hover{
        color: silver;
    }
`;

const ProfilePage = styled.div`
    position: absolute;
    top: 50px;
    width: 100%;
    height: 93.9vh;

    display: grid;
    grid-template-columns: 50% 50%; 
    place-items: center;
    place-content: center;

    color: black;
    font-size: 16px;

    z-index: 999;
`
const LeftContainer = styled.div`
    width: 50vw;
    height: 93.9vh;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
    place-items: center;
    place-content: center;

    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const ProfileContainer = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-rows: 100%;
    place-items: center;
    place-content: center;
`
const Photo = styled.img`
    width: 340px;
    height: 640px;
    display: grid;
    place-items: center;
    place-content: center;
`

const IntroduceContainer = styled.div`
    width: 100%;
    
    display: grid;
    place-items: center;
    place-content: center;
`
const RightContainer = styled.div`
    display: grid;
    place-items: center;
    place-content: center;
`



