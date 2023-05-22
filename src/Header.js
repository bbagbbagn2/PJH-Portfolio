import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GithubIcon from './img/github.svg';

export default function App() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleAbout = () => {
        const targetHeight = 658;
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
        setScrollPosition(targetHeight);
    };

    const handleHome = () => {
        const targetHeight = 0;
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
        setScrollPosition(targetHeight);
    };

    return (<>
        {/*<Header>
            <HeaderMessage to='/' className="active">HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='/contact'>CONTACT</HeaderMessage>
            <ChannelContainer onClick={() => window.open('https://github.com/bbagbbagn2', '_blank')}>
                <GithubIcon fill="FFF" width="24" height="24" />
            </ChannelContainer>
    </Header>*/}
        <Container>
            <Wrapper>
                <ItemsWrapper>
                    <Items to="/" onClick={handleHome}>HOME</Items>
                    <Items to="/" onClick={handleAbout}>ABOUT</Items>
                    <Items to='/work'>WORK</Items>
                </ItemsWrapper>
            </Wrapper>
        </Container>
    </>)
}

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 65px;
    display: grid;
    place-items: center;
    background: #FFFFFF;
    border-bottom: 2px solid #1A1E23; 
    z-index: 999;
`;

const Wrapper = styled.div`
    margin: 0 6.5%;
    display: grid;
    grid-template-columns: 1fr;
`;

const LogoWrapper = styled.div``;

const ItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const Items = styled(Link)`
    width: 190px;
    height: 100%;
    display: grid;
    place-items: center;
    color: #1A1E23;
    font-size: 14px;
    font-weight: medium;
    text-decoration: none;
    letter-spacing: 1.909091px;
    
    &:hover{
        color: #000000;
    }
    
`;

const MobileMenuWrapper = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: grid;
        justify-content: end;
        cursor: pointer;
    }
`;