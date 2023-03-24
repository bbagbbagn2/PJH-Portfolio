import React from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import IconDB from './img/IconDB.png';

export default function Activity() {
    return (<>
        <Header />
        <Page>
            <WorkPage>
                <WorkContainer>
                    <WorkList>
                        <Container href="/IconDB">
                            <Photo src={IconDB} alt="IconDB" />
                            <Gradient/>
                            <D>

                                <Dev>
                                    <DevDate>June 2022</DevDate>
                                    <DevTitle>IconDB</DevTitle>
                                </Dev>
                                <Description>
                                    <A>
                                        <Des>사용자의 목적에 가장 알맞는 아이콘을 무료 제작 및 배포할 수 있는 반응형 웹사이트입니다.</Des>
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
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;
    
    font-size: 12px;
    line-height: 16px;
`;
const Topic = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-bottom-width: 0.5px;
    border-style: solid;
    border-color: #E5E7EB;
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;

    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const Des = styled.p`
box-sizing: border-box;
border-width: 0;
border-style: solid;
border-color: #E5E7EB;

margin: 0;
margin-top: 1rem;
max-width: 80ch;

font-size: 1rem;
line-height: 1.5rem;

transition-duration: 0.5s;
transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

margin-block-end: 0px;
margin-block-start: 16px;
margin-inline-end: 0px;
margin-inline-start: 0px;
transform: matrix(1, 0, 0, 1, 0, 3);

`;
const Description = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    position: absolute;
    bottom: 25vh;
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

`;

const A = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    transform: translateY(48px);
`;
const Photo = styled.img`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    right:0;
    object-fit: cover;
    object-position: center;
    overflow-clip-margin: content-box;
    transition-duration: 0.5s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        transform: scale(1.05);
    }
`

const DevDate = styled.span`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    max-width: 65ch;

    font-size: 16px;
`;

const DevTitle = styled.h4`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    margin:0;
    margin-bottom: 1.25rem;
    margin-top: 0.25rem;
    
    font-size: 36px;
    font-weight: 700;
    line-height: 1.1;

    margin-block-end: 20px;
    margin-block-start: 4px;
    margin-inline-end: 0;
    margin-inline-start: 0;
`;

const Page = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    position: relative;
    outline: none;
    max-width: 100%;
    visibility: visible;
    
    display: block;

    line-height: inherit;
    tab-size: 4;
    text-size-adjust: 100%;

    color: rgb(255, 254, 250);
    background-color: rgb(15, 25, 34);
`;
const WorkPage = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    position: relative;
    padding-left: 0;
    padding-right: 0;

    overflow: hidden;
    text-align: left;

    color: rgb(255, 254, 250);
    user-select: none;

    z-index: 0;
`;

const Container = styled.a`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    text-decoration: inherit;

    color: rgb(255, 254, 250);
    cusrsor: pointer;
`;

const WorkContainer = styled.ul`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

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
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    position: relative;
    outline: none;
    width:calc(100%);
    height: 100vh;
    margin: 0;
    overflow: hidden;

    display: list-item;
    flex-shrink: 0;

    backface-visibility: hidden;
    list-style: none;
`;
const Gradient = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;

    background-image: linear-gradient(to top, #0F1922,rgb(15, 25, 34, 0));
    z-index: 0;
`;

const D = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;

    position: absolute;
    width: 100%;
    max-width: 92vw;
    bottom: 0;
    padding-top: 24vh;
    padding-bottom: 24vh;
    padding-left: 9rem;
    padding-right: 9rem;

    display: block;

    z-index: 10;
`;

const Dev = styled.div`
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #E5E7EB;
`;