import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header.js';

export default function Main() {
    return (
    <>
        <Header />
        <MainPage>
            <ProfileContainer>
                <ProfileWrapper>
                    <TitleWrapper>
                    <ProfileTitle color='#FFFFFF'>I</ProfileTitle>
                    <ProfileTitle color='#98FB98'>'</ProfileTitle>
                    <ProfileTitle color='#FFFFFF'>M</ProfileTitle>
                    </TitleWrapper>
                    <ProfileMessage>끈기로 성장하는 박지훈입니다</ProfileMessage>
                    <Link to="/work">
                        <LinkButton>Show Project</LinkButton>
                        </Link>
                </ProfileWrapper>
            </ProfileContainer>
    </MainPage>
    </>
    );
}

const MainPage = styled.div`
    position: static;
    width: 100%;
`;

const ProfileContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 1088px;
    display: grid;
    place-items: center;
    place-content: center;
    background: #1A1E23;
`;

const ProfileWrapper = styled(ProfileContainer)` 
    display: inline-block;
`;

const ProfileTitle = styled.h1`
    font-size:65px;
    color:${(props) => props.color};
`;

const ProfileMessage = styled(ProfileTitle)`
    font-size: 26px;
    color: white;

    &:before,
    &:after {
        background: white;
    }
`;

const TitleWrapper = styled.div`
    display: inline-block;
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

    &:hover:before {
        transform: translateX(100%);
    }
    &:before {
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