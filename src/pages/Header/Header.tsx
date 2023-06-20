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
        <Header>
            <HeaderLayout>
                <HeaderNav>
                    <NavItemBox>
                        <NavItem color='#98FB98' onClick={handleHome}>HOME</NavItem>
                    </NavItemBox>
                    <NavItemBox>
                        <NavItem onClick={handleSkill}>SKILL</NavItem>
                    </NavItemBox>
                    <NavItemBox>
                        <NavItem onClick={handleWork}>WORK</NavItem>
                    </NavItemBox>
                    <NavItemBox>
                        <NavItem onClick={handleContact}>CONTACT</NavItem>
                    </NavItemBox>
                </HeaderNav>
            </HeaderLayout>
        </Header>
    );
}

const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 65px;
    display: grid;
    place-items: center;
    background: rgba(26, 30, 35, 0.5);
    z-index: 999;
`;

const HeaderLayout = styled.div`
    margin: 0 6.5%;
`;

const HeaderNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const NavItemBox = styled.div`
    width: 190px;
    height: 100%;
    display: grid;
    place-items: center;
`;

const NavItem = styled.p<{ color?: string }>`
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    color: ${(props) => (props.color || "#939DAB")};

    &:hover{
        color: #FFFFFF;
    }
`;