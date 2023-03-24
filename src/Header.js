import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Github} from './img/github.svg';

export default function App(){
    return(<>
    <Header>
            <HeaderMessage to='/' className="active">HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='/contact'>CONTACT</HeaderMessage>
            <ChannelContainer>
            <Github onClick={() => window.open('https://github.com/bbagbbagn2', '_blank')}/>
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
    
    display: grid;
    grid-template-columns: repeat(5,10%);
    place-items: center;
    place-content: center;

    background: #1A1E23;
    font-size: 16px;
    color: white;
    z-index: 999;
`;

const HeaderMessage = styled(Link)`
    transition: 0.5s ease;
    opacity: .4;
    color: #fff;
    text-transform: uppercase;
    display: block;
    letter-spacing: .2em;
    font-size: 14px;
    padding: 20px;

    &:hover{
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