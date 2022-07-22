import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

export default function Profile() {
    return (<>
        <Header />
        <ProfilePage>
        </ProfilePage>
    </>)
}

const ProfilePage = styled.div`

display: grid;
`;