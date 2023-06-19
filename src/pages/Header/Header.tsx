import React from "react";
import styled from 'styled-components';

export default function App(): JSX.Element {
    const handleScroll = (targetHeight: number) => {
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
    };

    const handleHome = () => {
        handleScroll(0);
    };

    const handleSkill = () => {
        handleScroll(988);
    };

    const handleWork = () => {
        handleScroll(1938);
    };

    const handleContact = () => {
        handleScroll(4050);
    };

    return (
    <>
        <Container>
            <Wrapper>
                <ItemsContainer>
                    <ItemsWrapper>
                        <NavItems color='#98FB98' onClick={handleHome}>HOME</NavItems>
                    </ItemsWrapper>
                    <ItemsWrapper>
                        <NavItems onClick={handleSkill}>SKILL</NavItems>
                    </ItemsWrapper>
                    <ItemsWrapper>
                        <NavItems onClick={handleWork}>WORK</NavItems>
                    </ItemsWrapper>
                    <ItemsWrapper>
                        <NavItems onClick={handleContact}>CONTACT</NavItems>
                    </ItemsWrapper>
                </ItemsContainer>
            </Wrapper>
        </Container>
    </>
    );
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
    grid-template-columns: repeat(4, 1fr);
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

const NavItems = styled.p<{ color?: string }>`
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    color: ${(props) => (props.color || "#939DAB")};

    &:hover{
        color: #FFFFFF;
    }
`;