import React from 'react';
import styled from 'styled-components';
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Main() {
    return (
        <ContactContainer>
            <ContactWrapper>
                <MyContactContainer>
                    <MyContactWrapper>
                        <div>
                            <ContactTitle>Contact</ContactTitle>
                            <ContactMessage>Do you have any questions or suggestions? Contact us at any time and we will respond promptly.</ContactMessage>
                        </div>
                        <ContactItemWrapper>
                            <ContactList>
                                <BsPhoneVibrate size="100" color="#98FB98" />
                                <ItemTitle>PHONE</ItemTitle>
                                <ContactItem>010-9207-8758</ContactItem>
                            </ContactList>
                            <ContactList>
                                <AiOutlineMail size="100" color="#98FB98" />
                                <ItemTitle>EMAIL</ItemTitle>
                                <ContactItem>pyoungh137@gmail.com</ContactItem>
                            </ContactList>
                        </ContactItemWrapper>
                    </MyContactWrapper>
                </MyContactContainer>
            </ContactWrapper>
        </ContactContainer>
    );
}

const ContactContainer = styled.div`
    height: 880px;
    display: grid;
    justify-items: center;
`;

const ContactWrapper = styled.div`
    width: 40vw;
    height: 510px;
    background: #FFFFFF;
    padding: 60px 10%;
    box-shadow: 0px 1px 25px 4px rgba(234,234,234,0.3);
`;

const MyContactContainer = styled.div`
    height: 100%;
`;

const MyContactWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 45% 1fr;
`;

const ContactTitle = styled.h5`
    margin-bottom: 0;
    text-align: center;
    font-size: 35px;
    color: #1A1E23;
`;

const ContactItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ContactMessage = styled.p`
    text-align: center;
    line-height: 1.9em;
    font-size: 15px;
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

const ItemTitle = styled.h1``;