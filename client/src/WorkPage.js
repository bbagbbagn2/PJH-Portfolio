import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Activity() {
    return (<>
        <Header>
            <HeaderMessage to='/'>HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='#'>CONTACT</HeaderMessage>
        </Header>
    </>
    )
}
const Header = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    
    display: grid;
    grid-template-columns: repeat(4,10%);
    place-items: center;
    place-content: center;

    background: #042940;
    font-size: 16px;
    color: white;
    z-index: 999;
`;

const HeaderMessage = styled(Link)`
    color: white;
    transition-duration: 0.5s;
    &:hover{
        color: orange;
    }
`;