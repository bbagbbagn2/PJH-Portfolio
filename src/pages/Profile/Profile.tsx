import React, { useState, useEffect } from 'react';
import * as S from './ProfileCss.ts';

export default function Profile(): JSX.Element {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <S.ProfilePageSection>
            <S.ProfilePageBox>
                <S.TitleBox>
                    {windowWidth <= 768 ? (
                        <h1>
                            <S.ProfilePageParagraph fontSize="48px" lineHeight="1.4em">I'M A</S.ProfilePageParagraph>
                            <S.ProfilePageParagraph fontSize="48px" lineHeight="1.4em">FRONT-END</S.ProfilePageParagraph>
                            <S.ProfilePageParagraph fontSize="48px" lineHeight="1.4em">DEVELOPER.</S.ProfilePageParagraph>
                        </h1>
                    ) : (
                        <h1>
                            <S.ProfilePageParagraph fontSize="60px" lineHeight="1.4em">I'M A</S.ProfilePageParagraph>
                            <S.ProfilePageParagraph fontSize="60px" lineHeight="1.4em">FRONT-END</S.ProfilePageParagraph>
                            <S.ProfilePageParagraph fontSize="60px" lineHeight="1.4em">DEVELOPER.</S.ProfilePageParagraph>
                        </h1>
                    )}
                </S.TitleBox>
                <div>
                    <h5>
                        <S.ProfilePageParagraph fontSize="24px" lineHeight="1.8em" textAlign="center">
                            가능성을을 개발하는 개발자.
                        </S.ProfilePageParagraph>
                    </h5>
                </div>
            </S.ProfilePageBox>
        </S.ProfilePageSection >
    );
}