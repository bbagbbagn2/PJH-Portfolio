import React from 'react';
import * as S from './ProfileCss.ts';

export default function Profile(): JSX.Element {
    return (
        <S.ProfilePageSection>
            <S.ProfilePageBox>
                <S.TitleBox>
                    <h1>
                        <S.ProfilePageParagraph fontSize="65px">
                            I<S.ProfilePageSpan>'</S.ProfilePageSpan>M A
                            <br />
                            FRONT<S.ProfilePageSpan>-</S.ProfilePageSpan>END
                            <br />
                            DEVELOPER<S.ProfilePageSpan>.</S.ProfilePageSpan>
                        </S.ProfilePageParagraph>
                    </h1>
                </S.TitleBox>
                <div>
                    <h5>
                        <S.ProfilePageParagraph fontSize="24px" lineHeight="1.8em" textAlign="center">
                            가능성을을 개발하는 개발자, 박지훈입니다.
                        </S.ProfilePageParagraph>
                    </h5>
                </div>
            </S.ProfilePageBox>
        </S.ProfilePageSection>
    );
}