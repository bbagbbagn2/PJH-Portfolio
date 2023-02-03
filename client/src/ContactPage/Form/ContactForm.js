import React from "react";
import styled from "styled-components";
import { css } from "styled-components"

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;

export default function Contact() {
    return (
    <Page>
        <Form>
            <WrapperGrid>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Company</Label>
                <Input type="text" name="company" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Email Address</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Phone Number</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid full>
                <Label>Message</Label>
                <Textarea name="message" rows="5"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton>Submit</StyledButton>
            </WrapperGrid>
        </Form>
    </Page>
    )
}
const Page = styled.div`
    background: white;
`;
const Form = styled.form`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-gap: 20px;
`; 

const Label = styled.label` 
    display: block; 
    font-size: 22px;
`; 

const Input = styled.input`
    border: 1px solid black; 
    padding: 1em; 
    width: 100%;
`; 

const Textarea = styled.textarea`
    border: 1px solid black; 
    padding: 1em; 
    width: 100%; 
`; 


const StyledButton = styled.button`
    background: #98fb98;
    border: 0; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: black;
        color: #fff; 
        outline: 0; 
        transition: background-color 2s ease-out; 
    } 
`; 