import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Github} from './img/github.svg';
import {ReactComponent as Notion} from './img/notion.svg';

export default function App(){
    return(<>
    <Header>
            <HeaderMessage to='/' className="active">HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='/contact'>CONTACT</HeaderMessage>
            <ChannelContainer>
            <Github onClick={() => window.open('https://github.com/bbagbbagn2', '_blank')}/>
            <Notion onClick={() => window.open('https://concise-molybdenum-1ed.notion.site/c4ce189e86cf43e8858349a33ebb482d', '_blank')}/>
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

    &:hover{
        color: #98fb98;
        opacity: .7;
    }
`;

const ChannelContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,40px);
`