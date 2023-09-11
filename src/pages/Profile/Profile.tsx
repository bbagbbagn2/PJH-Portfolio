import React, { useState, useEffect } from 'react';
import * as S from './ProfileCss';

export default function Profile(): JSX.Element {
    return (
        <S.ProfilePageSection>
            <S.ProfilePageBox>
                <S.TitleBox>
                            <S.ProfilePageHeading>
                                I
                                <S.ProfilePageSpan>'</S.ProfilePageSpan>
                                M A
                                <br />
                                FRONT
                                <S.ProfilePageSpan>-</S.ProfilePageSpan>
                                END
                                <br />
                                DEVELOPER
                                <S.ProfilePageSpan>.</S.ProfilePageSpan>
                            </S.ProfilePageHeading>
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