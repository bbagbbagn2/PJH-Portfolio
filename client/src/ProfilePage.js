import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Profile() {
    return (<>
        <Header>
        <div>Home</div>
        <div>About</div>
        <div>History</div>
        <div>Activity</div>
    </Header>
    <ProfilePage>
        
    </ProfilePage>
    </>)
}

const Header = styled.div`
    position: fixed;
    width: 100%;
    height: 30px;
    
    display: grid;
    grid-template-columns: 5% 1fr repeat(2,5%);
    padding: 10px;

    background: black;
    font-size: 16px;
    color: white;
    z-index: 999;
`

const ProfilePage = styled.div`

display: grid;
`;