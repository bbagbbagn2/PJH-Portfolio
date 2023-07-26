import React from 'react';
import * as S from './ProfileCss.ts';
import AutoResizeText from '../../components/AutoResizeText.tsx';

export default function Profile(): JSX.Element {
    return (
        <S.ProfilePageSection>
            <S.ProfilePageBox>
                <S.TitleBox>
                    <h1>
                        <AutoResizeText text="I'M A" minWidth={350} />
                        <AutoResizeText text="FRONT-END" minWidth={350} />
                        <AutoResizeText text="DEVELOPER." minWidth={350} />
                    </h1>
                </S.TitleBox>
                <div>
                    <h5>
                        <S.ProfilePageParagraph fontSize="24px" lineHeight="1.8em" textAlign="center">
                            가능성을을 개발하는 개발자.
                        </S.ProfilePageParagraph>
                    </h5>
                </div>
            </S.ProfilePageBox>
        </S.ProfilePageSection>
    );
}