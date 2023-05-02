import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GithubIcon from './img/github.svg';

export default function App() {
    return (<>
        <Header>
            <HeaderMessage to='/' className="active">HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='/contact'>CONTACT</HeaderMessage>
            <ChannelContainer onClick={() => window.open('https://github.com/bbagbbagn2', '_blank')}>
                <GithubIcon fill="FFF" width="24" height="24" />
            </ChannelContainer>
        </Header>
    </>)
}

const Header = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1A1E23;
    font-size: 16px;
    color: white;
    z-index: 999;
`;

const HeaderMessage = styled(Link)`
    transition: 0.5s ease;
    opacity: .4;
    color: #FFF;
    text-transform: uppercase;
    display: block;
    letter-spacing: .2em;
    font-size: 14px;
    padding: 20px;


    &:active {
        opacity: 1;
    }

    &:hover {
        color: #98FB98;
        opacity: .7;
    }
`;

const ChannelContainer = styled.div`
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.5s ease;
    
    &:hover{
        opacity: .7;
    }
`