import React from 'react';
import * as S from './FooterCss.ts';

export default function Footer() {
    return (
        <S.Footer>
            <S.InnerContentBox>
                <S.FooterMainBox>
                    <S.ContactBox>
                        <S.HelloSpan>say hello</S.HelloSpan>
                        <S.ContactList>
                            <li>
                                <S.MyLink to="#">pyoungh137@gmail.com</S.MyLink>
                            </li>
                            <li>
                                <S.MyLink to="#">010.9207.8758</S.MyLink>
                            </li>
                        </S.ContactList>
                    </S.ContactBox>
                    <S.MyList>
                            <li>
                                <S.MyLink to="#">My Portfolio</S.MyLink>
                            </li>
                            <li>
                                <S.MyLink to="#">My Resume</S.MyLink>
                            </li>
                        </S.MyList>
                </S.FooterMainBox>
                <S.FooterBottomBox>
                    <span>© JH Portfolio 2023</span>
                    <S.SocialContactList>
                        <S.SocialContactItem>
                            <S.MyLink to="https://github.com/bbagbbagn2">GitHub</S.MyLink>
                        </S.SocialContactItem>
                    </S.SocialContactList>
                </S.FooterBottomBox>
            </S.InnerContentBox>
        </S.Footer>
    )
}
