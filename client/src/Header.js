import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Head(){
    <Header>
        <div>Home</div>
        <div>About</div>
        <div>History</div>
        <div>Activity</div>
    </Header>
}

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 30px;
    
    display: grid;
    grid-template-columns: 10% 1fr repeat(4,10%);

    background: black;
    font-size: 16px;

    z-index: 999;
`