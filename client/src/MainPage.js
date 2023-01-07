import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Main(){
    return(
        
        <MainPage>
            <ProfileContainer>
                <MessageWrapper>
                    <ProfileTitle>Web Front-End Developer</ProfileTitle>
                    <ProfileMessage>포기없는 개발자 박지훈입니다</ProfileMessage>
                </MessageWrapper>
            </ProfileContainer>
            <DetailContainer>
                <DetailWrapper>
                    <DetailMessage to ='/about'>ABOUT ME</DetailMessage>
                    <DetailMessage to ='/work'>WORK</DetailMessage>
                    <DetailMessage to ='#'>CONTACT</DetailMessage>
                </DetailWrapper>
            </DetailContainer>
        </MainPage>
    )
}

const MainPage = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 1.6fr 1fr;
`;

const ProfileContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;
    place-content: center;

    background: black;
`;

const MessageWrapper = styled(ProfileContainer)` 
`;

const ProfileTitle = styled.p`
    color: white;
    font-size: 50px;
`;

const ProfileMessage = styled(ProfileTitle)`
    font-size: 26px;
`;

const DetailContainer = styled(ProfileContainer)`
    background: white;
`;

const DetailWrapper = styled(DetailContainer)`
`;

const DetailMessage = styled(Link)`
padding: 20px;

color: black;
font-size: 30px;
transition-duration: 0.5s;
&:hover{
    color: orange;
}
`;

