import React from 'react';
import styled from 'styled-components';

export default function Main(){
    return(
        <MainPage>
            <ProfilePage>
                <ProfileMessage>Junior Web Front-End Developer<br/>박지훈</ProfileMessage>
            </ProfilePage>
        </MainPage>
    )
}

const MainPage = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 1.6fr 1fr;
`;

const ProfilePage = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;
    place-content: center;

    background: black;
`;

const ProfileMessage = styled.p`
    color: white;
    font-size: 30px;
`;