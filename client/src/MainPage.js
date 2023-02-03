import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Main(){
    return(
        
        <MainPage>
            <ProfileContainer>
                <MessageWrapper>
                    <ProfileTitle>Front-End Developer </ProfileTitle>
                    <ProfileMessage>끈기로 성장하는 박지훈입니다</ProfileMessage>
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

const ProfileTitle = styled.h1`
    font-size:60px;
    font-weight:bold;
    text-align:center;
    color:#98fb98;
    letter-spacing: 0;
    transition:1s;
    -webkit-transition:1s;
    -ms-transition:1s;
    position: relative;
    padding: 15px;

    display: grid;
    place-items: center;
    place-content: center;


    &:before, &:after{
        content:"";
        position: absolute;
        height: 7px;
        width: 0px;
        background:#98fb98;
        transition:300ms;
        -webkit-transition:1s;
        -ms-transition:1s;
        opacity:0.3;
        left:50%;
    }

    &:before{
        bottom: 0;
    }

    &:after{
        top: 0;
    }

    &:hover{    
        letter-spacing: 10px;
    }

    &:hover:before, &:hover:after{
        width: 98%;
        opacity: 1;
        left: 0;
    }
`;

const ProfileMessage = styled(ProfileTitle)`
    font-size: 26px;
`;

const DetailContainer = styled(ProfileContainer)`
    background: #98fb98;
`;

const DetailWrapper = styled(DetailContainer)`
`;

const DetailMessage = styled(Link)`
padding: 25px;
opacity: .7;
color: black;
font-size: 40px;
transition-duration: 0.5s; 
position: relative;

display: grid;
place-items: center;
place-content: center;


&:before, &:after{
    content:"";
    position: absolute;
    height: 3px;
    width: 0px;
    background:black;
    transition:0.2s;
    -webkit-transition:1s;
    -ms-transition:1s;
    opacity:0.3;
    left:0;

    display: grid;
place-items: center;
place-content: center;

}
&:before{
    bottom: 0;
}
&:hover{
    opacity: 1;
}
&:hover:after{
    width: 98%;
    opacity: 1;
    left: 0;
}

`;

