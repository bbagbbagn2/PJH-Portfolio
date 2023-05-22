import React,{ useState } from "react";
import styled from 'styled-components';

export default function App() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleSkill = () => {
        const targetHeight = 988;
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
                <ItemsContainer>
                    <ItemsWrapper>
                        <Items color='#98FB98' onClick={handleHome}>HOME</Items>
                        </ItemsWrapper>
                    <ItemsWrapper>
                    <Items onClick={handleSkill}>SKILL</Items>
                    </ItemsWrapper>
                    <ItemsWrapper>
                    <Items>WORK</Items>
                    </ItemsWrapper>
                </ItemsContainer>
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
    background: rgba(26, 30, 35, 0.5);
    z-index: 999;
`;

const Wrapper = styled.div`
    margin: 0 6.5%;
    display: grid;
    grid-template-columns: 1fr;
`;

const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const ItemsWrapper = styled.div`
    width: 190px;
    height: 100%;
    display: grid;
    place-items: center;
`;

const Items = styled.p`
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    color: ${(props) => (props.color || "#939DAB")};

    &:hover{
        color: #FFFFFF;
    }

`;