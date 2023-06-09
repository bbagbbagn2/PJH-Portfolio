import React from 'react';
import styled from 'styled-components';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import PortfolioTitle from '../../components/Title';
import "../../assets/font/Font.css";

export default function Contact() {
    return (
        <MainContainer>
            <PortfolioTitle titleNumber="03" titleText="CONTACT"/>
            <ContactWrapper>
                    <MyContactWrapper>
                        <ContactItemWrapper>
                            <ContactList>
                                <BsPhoneVibrate size={100} color="#98FB98" />
                                <h1>PHONE</h1>
                                <ContactItem>010-9207-8758</ContactItem>
                            </ContactList>
                            <ContactList>
                                <AiOutlineMail size={100} color="#98FB98" />
                                <h1>EMAIL</h1>
                                <ContactItem>pyoungh137@gmail.com</ContactItem>
                            </ContactList>
                        </ContactItemWrapper>
                    </MyContactWrapper>
            </ContactWrapper>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    margin-bottom: 150px;
    display: grid;
    justify-items: center;
`;

const ContactWrapper = styled.div`
    padding: 3rem;
    width: 60%;
    height: 510px;
    display: grid;
    align-items: center; 
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0px 1px 25px 4px rgba(234,234,234,0.3);
`;


const MyContactWrapper = styled.div``;


const ContactItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ContactMessage = styled.p`
    text-align: center;
    line-height: 1.9em;
    color: #1A1E23;
`;

const ContactItem = styled(ContactMessage)`
    margin: 0;
`;


const ContactList = styled.div`
    color: #1A1E23;
    display: grid;
    place-items: center;
`;