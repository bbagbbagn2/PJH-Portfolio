import React from "react";
import * as S from "./HeaderCss.ts";

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
        handleScroll(888);
    };

    const handleWork = () => {
        handleScroll(1976);
    };

    const handleContact = () => {
        handleScroll(5076);
    };

    return (
        <S.Header>
            <S.HeaderLayout>
                <S.HeaderNav>
                    <S.NavItemBox>
                        <S.NavItem color='#98FB98' onClick={handleHome}>HOME</S.NavItem>
                    </S.NavItemBox>
                    <S.NavItemBox>
                        <S.NavItem onClick={handleSkill}>SKILL</S.NavItem>
                    </S.NavItemBox>
                    <S.NavItemBox>
                        <S.NavItem onClick={handleWork}>WORK</S.NavItem>
                    </S.NavItemBox>
                    <S.NavItemBox>
                        <S.NavItem onClick={handleContact}>CONTACT</S.NavItem>
                    </S.NavItemBox>
                </S.HeaderNav>
            </S.HeaderLayout>
        </S.Header>
    );
}
