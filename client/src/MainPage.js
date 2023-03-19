import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header.js';

export default function Main() {
    return (<>
        <Header />
        <MainPage>
            <ProfileContainer>
                <MessageWrapper>
                    <ProfileTitle>Front-End Developer </ProfileTitle>
                    <ProfileMessage>끈기로 성장하는 박지훈입니다</ProfileMessage>
                    <Link to="/work"><LinkButton>Show Project</LinkButton></Link>
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
    color:#98FB98;
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
        background:#98FB98;
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
    color: white;

    &:before, &:after{
        background: white;
    }
`;

const LinkButton = styled.button`
    margin-top: 140px;
    background: #1A1E23;
    padding: 30px 100px;
    border: 2px solid #98FB98;
    overflow: hidden;
    position: relative;
    font-size: 26px;
    color: #98FB98;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    &:hover:before{
        transform: translateX(100%);
    }
    &:before{
        content: '';
        background: #98FB98;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        transition: .56s cubic-bezier(0.5, 0, 0.5, 1);
    }
`;