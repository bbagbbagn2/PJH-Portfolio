import React from 'react';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import PortfolioTitle from '../../components/Title.tsx';
import "../../assets/font/Font.css";
import * as S from './ContactCss.ts';

export default function Contact(): JSX.Element {
    return (
        <S.ContactPageSection>
            <PortfolioTitle titleNumber="03" titleText="CONTACT"/>
            <S.ContactPageBox>
                        <S.ContactItemCol>
                            <S.ContactItemBox>
                                <BsPhoneVibrate size={100} color="#98FB98" />
                                <h1>PHONE</h1>
                                <S.ContactItemParagrapgh>010-9207-8758</S.ContactItemParagrapgh>
                            </S.ContactItemBox>
                            <S.ContactItemBox>
                                <AiOutlineMail size={100} color="#98FB98" />
                                <h1>EMAIL</h1>
                                <S.ContactItemParagrapgh>pyoungh137@gmail.com</S.ContactItemParagrapgh>
                            </S.ContactItemBox>
                        </S.ContactItemCol>
            </S.ContactPageBox>
        </S.ContactPageSection>
    );
}