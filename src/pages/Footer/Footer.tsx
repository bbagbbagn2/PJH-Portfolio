import React from 'react';
import * as S from './FooterCss.ts';

export default function App(): JSX.Element {
    return (
        <S.Footer>
            <S.InnerContentBox>
                <S.FooterMainBox>
                    <S.ContactBox>
                        <S.HelloSpan>say hello</S.HelloSpan>
                        <S.MyList>
                            <li>
                                <S.MyLink to="#">My Portfolio</S.MyLink>
                            </li>
                            <li>
                                <S.MyLink to="#">My Resume</S.MyLink>
                            </li>
                        </S.MyList>
                    </S.ContactBox>
                </S.FooterMainBox>
                <S.FooterBottomBox>
                    <span>Copyright JH Portfolio 2023</span>
                    <S.SocialContactList>
                        <S.SocialContactItem>
                            <S.MyLink to="">GitHub</S.MyLink>
                        </S.SocialContactItem>
                    </S.SocialContactList>
                </S.FooterBottomBox>
            </S.InnerContentBox>
        </S.Footer>
    )
}
