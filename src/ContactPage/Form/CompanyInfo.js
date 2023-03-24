import React from 'react'
import styled from 'styled-components'


const WrapperCompanyInfo=styled.div`
    background: #98fb98;
`; 

const CompanyName = styled.p`
    margin: 0 0 1rem 0;
    text-align: center;
    font-size: 30px; 
    @media (min-width: 815px) {
        text-align: left; 
    }
`;

const WrapperList = styled.p`
    margin:0 0 3rem 0;
    padding:0;
    text-align: center;
    font-size: 18px;
    @media (min-width: 815px) {
        text-align: left; 
    }
`;


export default function CompanyInfo(){
    return(
    <WrapperCompanyInfo>
        <CompanyName>Phone Number</CompanyName>
        <WrapperList>010-9207-8758</WrapperList>
        <CompanyName>Email</CompanyName>
        <WrapperList>pyoungh137@gmail.com</WrapperList>
    </WrapperCompanyInfo>
    )
}
