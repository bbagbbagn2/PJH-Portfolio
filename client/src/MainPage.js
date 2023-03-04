import React from 'react';
import styled from 'styled-components';
import Header from './Header.js';

export default function Main(){
    return(<>
        <Header/>
        <MainPage>
            <ProfileContainer>
                <MessageWrapper>
                    <ProfileTitle>Front-End Developer </ProfileTitle>
                    <ProfileMessage>끈기로 성장하는 박지훈입니다</ProfileMessage>
                </MessageWrapper>
            </ProfileContainer>
        </MainPage>
        </>)
}

const MainPage = styled.div`
    width: 100vw;
    height: 100vh;
`;

const ProfileContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;
    place-content: center;

    background: #1A1E23;
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