import React from 'react';
import styled from 'styled-components';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import PortfolioTitle from '../../components/Title.tsx';
import "../../assets/font/Font.css";

export default function Contact(): JSX.Element {
    return (
        <ContactPageSection>
            <PortfolioTitle titleNumber="03" titleText="CONTACT"/>
            <ContactPageBox>
                        <ContactItemCol>
                            <ContactItemBox>
                                <BsPhoneVibrate size={100} color="#98FB98" />
                                <h1>PHONE</h1>
                                <ContactItemParagrapgh>010-9207-8758</ContactItemParagrapgh>
                            </ContactItemBox>
                            <ContactItemBox>
                                <AiOutlineMail size={100} color="#98FB98" />
                                <h1>EMAIL</h1>
                                <ContactItemParagrapgh>pyoungh137@gmail.com</ContactItemParagrapgh>
                            </ContactItemBox>
                        </ContactItemCol>
            </ContactPageBox>
        </ContactPageSection>
    );
}

const ContactPageSection = styled.section`
    margin-bottom: 150px;
    display: grid;
    justify-items: center;
`;

const ContactPageBox = styled.div`
    padding: 3rem;
    width: 60%;
    height: 510px;
    display: grid;
    align-items: center; 
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0px 1px 25px 4px rgba(234,234,234,0.3);
`;

const ContactItemCol = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ContactItemBox = styled.div`
    color: #1A1E23;
    display: grid;
    place-items: center;
`;

const ContactItemParagrapgh = styled.p`
    text-align: center;
    line-height: 1.9em;
    color: #1A1E23;
`;

