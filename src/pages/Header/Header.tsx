import React from "react";
import * as S from "./HeaderCss.ts";

export default function Header() {
    const handleScroll = (targetHeight: number) => {
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
    };

    const handleHome = () => {
        handleScroll(0);
    };

    return (
        <S.Header>
            <S.NavItem color='#FFF' onClick={handleHome}>HOME</S.NavItem>
        </S.Header>
    );
}