import React from 'react';
import styled from 'styled-components';
import Container from './Components/Container';
import CompanyInfo from './Form/CompanyInfo';
import ContactForm from './Form/ContactForm';
import Header from '../Header';

export default function Main(){
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
      
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();

    return(
        <Page>
            <Header/>
        <Container>
            <Container wrapper>
                <CompanyInfo/>
                <ContactForm/>
            </Container>
        </Container>
        </Page>
    )
}

const Page = styled.div`
position: fixed;
top: 50px;
width: 100%;
height: calc(var(--vh, 1vh) * 100);
background: white;
padding-top: 10%;
`;