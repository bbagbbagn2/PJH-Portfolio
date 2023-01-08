import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Activity() {
    return (<>
        <Header>
            <HeaderMessage to='/'>HOME</HeaderMessage>
            <HeaderMessage to='/about'>ABOUT</HeaderMessage>
            <HeaderMessage to='/work'>WORK</HeaderMessage>
            <HeaderMessage to='#'>CONTACT</HeaderMessage>
        </Header>
        <Page>
        <WorkPage>
            <WorkContainer>
                <WorkList>
            <Container href="#">
                <Gradient/>
            <D>
                <FFF>
                    <DevDate>June 2022</DevDate>
                    <DevTitle>IconDB</DevTitle>
                </FFF>
                <Description>
                    <A>
                        <Des>사용자가 원하는 목적에 최적화할 수 있는 아이콘 무료 배포 웹사이트입니다.</Des>
                    </A>
                </Description>
                <Topic>
                    <Tags>Website</Tags>
                </Topic>
            </D>
            </Container>
            </WorkList>
            </WorkContainer>
        </WorkPage>
        </Page>
    </>
    )
}
const Tags = styled.span`
    box-sizing: border-box;
    
    font-size: 12px;
    line-height: 16px;
`;
const Topic = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;

    border-bottom-width: 1px;

    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        matrix(1, 0, 0, 1, 0, 58);
    }
`;

const Des = styled.p`
box-sizing: border-box;
margin-top: 1rem;
max-width: 65ch;

transition-duration: 0.5s;
transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

margin-block-end: 0px;
margin-block-start: 16px;
margin-inline-end: 0px;
margin-inline-start: 0px;
transform: matrix(1, 0, 0, 1, 0, 48);
&:hover{
transform: matrix(1, 0, 0, 1, 0, 0);
}

`;
const Description = styled.div`
    bottom: 25vh;
    box-sizing: border-box;
    position: absolute;

    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: matrix(1, 0, 0, 1, 0, -64);
    &:hover{
    transform: matrix(1, 0, 0, 1, 0, 0);
    }

`;
const A = styled.div`   
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: matrix(1, 0, 0, 1, 0, 48);
    &:hover{
    transform: matrix(1, 0, 0, 1, 0, 0);
    }
`;


const DevDate = styled.span`
    box-sizing: border-box;
    max-width: 65ch;

    font-size: 16px;
`;

const DevTitle = styled.h4`
    box-sizing: border-box;
    margin-bottom: 1.25rem;
    margin-top: 0.25rem;
    
    font-size: 36px;
    font-weight: 700;
    line-heigth: 2.5rem;

    margin-block-end: 20px;
    margin-block-start: 4px;
    margin-inline-end: 0;
    margin-inline-start: 0;
    

`;
const Header = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 50px;
    
    display: grid;
    grid-template-columns: repeat(4,10%);
    place-items: center;
    place-content: center;

    background: #042940;
    font-size: 16px;
    color: white;
    z-index: 999;
`;

const HeaderMessage = styled(Link)`
    color: white;
    transition-duration: 0.5s;
    &:hover{
        color: orange;
    }
`;
const Page= styled.div`
    box-sizing: border-box;
    display: block;
    height:100vh;
    width: 100%;
    position: relative;
    visibility: visible;
    
    
    line-height: inherit;
    tab-size: 4;
    text-size-adjust: 100%;

    color: rgb(255, 254, 250);
    background-color: rgb(15, 25, 34);

`;
const WorkPage = styled.div`
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    position: relative;
    z-index: 0;

    color: rgb(255, 254, 250);

    user-select: none;
`;

const Container = styled.a`
    box-sizing: border-box;

    text-decoration: inherit;

    color: rgb(255, 254, 250);
    cusrsor: pointer;
`;
const WorkContainer = styled.ul`
    box-sizing: border-box;
    display: flex;
    height: 100%;

    backface-visibility: hidden;
    list-style-type: none;
    margin: 0!important;
    padding: 0!important;
    transform: translateX(0px);
    transform-style: preserve-3d;
`;

const WorkList = styled.li`
    box-sizing: border-box;
    display: list-item;
    flex-shrink: 0;
    height: 100vh;
    position: relative;
    width:calc(100%);

    backface-visibility: hidden;
`;
const Gradient = styled.div`
    box-sizing: boreder-box;
    height: 100%;
    position: absolute;
    right: 0;
    width: 100%;

    background-image: linear-gradient(to top, #0f1922, rgb(15 25 34 / 0));
`;

const D = styled.div`
    bottom: 0;
    box-sizing: border-box;
    display: block;
    max-width: none;
    padding-bottom: 24vh;
    padding-left: 9rem;
    padding-right: 9rem;
    padding-top: 24vh;
    position: absolute;
    width: 100%;
    z-index: 10;
`;

const FFF = styled.div`
    box-sizing: border-box;

    transition-duration: .5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    &:hover{
        transform: matrix(1, 0, 0, 1, 0, -67);
    }
`;