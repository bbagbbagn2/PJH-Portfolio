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
        handleScroll(800);
    };

    const handleWork = () => {
        handleScroll(2350);
    };

    const handleContact = () => {
        handleScroll(5076);
    };

    return (
        <S.Header>
            <S.NavItem color='#FFF' onClick={handleHome}>HOME</S.NavItem>
        </S.Header>
    );
}
