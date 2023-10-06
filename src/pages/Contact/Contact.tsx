import React from 'react';

import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import PortfolioTitle from '../../components/Title.tsx';
import "../../assets/font/Font.css";
import * as S from './ContactCss';

export default function Contact(): JSX.Element {
    return (
        <S.ContactPageSection>
            <PortfolioTitle titleText="CONTACT" />
            <S.ContactList>
                <S.ContactItem>
                    <S.ContactItemBox>
                        <BsPhoneVibrate size="8rem" />
                        <h1>PHONE</h1>
                        <S.ContactItemParagrapgh>010-9207-8758</S.ContactItemParagrapgh>
                    </S.ContactItemBox>
                </S.ContactItem>
                <S.ContactItem>
                    <S.ContactItemBox>
                        <AiOutlineMail size="8rem" />
                        <h1>EMAIL</h1>
                        <S.ContactItemParagrapgh>pyoungh137@gmail.com</S.ContactItemParagrapgh>
                    </S.ContactItemBox>
                </S.ContactItem>
            </S.ContactList>
        </S.ContactPageSection>
    );
}