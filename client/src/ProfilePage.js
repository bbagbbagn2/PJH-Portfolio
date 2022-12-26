import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from './img/박지훈.jpg'

export default function Profile() {
    return (<>
        <Header>
            <HeaderMessage to='/'>Home</HeaderMessage>
            <div />
            <HeaderMessage to='/about'>About</HeaderMessage>
            <HeaderMessage to='#'>History</HeaderMessage>
            <HeaderMessage to='#'>Activity</HeaderMessage>
        </Header>
        <ProfilePage>
            <LeftContainer>
                <ProfileContainer>
                        <Photo src={profile} alt="profile" />
                    <NumberWrapper>
                    <div>Email : pyoungh999@naver.com</div>
                    <div onClick={()=>window.open('https://github.com/bbagbbagn2','_blank')}>Github</div>
                    <div onClick={()=>window.open('https://concise-molybdenum-1ed.notion.site/c4ce189e86cf43e8858349a33ebb482d','_blank')}>Notion</div>
                    <div>Phone : 010-9207-8758</div>
                    </NumberWrapper>
                </ProfileContainer>
                <IntroduceContainer>
                    <h2>Junior Front-End Developer 박지훈입니다</h2>
                    <div>맡은 바는 끝까지 하는 끈기를 가지고 있습니다.</div>
                    <div>결과보다는 원리를 더 알고자 하는 편입니다.</div>
                    <div>리팩토링을 통해 더 효율적인 개발을 하고자 합니다.</div>
                    <div>일정 관리 및 회의 내용을 기록하여 기간 내에 개발을 완료하도록 노력합니다.</div>
                    <div>팀원들과의 소통을 잘 할 수 있습니다.</div>
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
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    place-items: center;
    place-content: center;
`
const NumberWrapper = styled.div`
    displat: grid;
`

const Photo = styled.img`
    width: 250px;
    height: 300px;
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



