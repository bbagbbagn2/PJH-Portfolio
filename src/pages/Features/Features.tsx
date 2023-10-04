import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PortfolioTitle from '../../components/Title.tsx';
import { BsInfinity, BsGear } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function Profile(): JSX.Element {
    return (
        <FeaturePageSection>
            <PortfolioTitle titleText='FEATURES'></PortfolioTitle>
            <CardList>
            <CardContainer>
                <CardBox>
                    <BsInfinity size="8rem" />
                    <CardHeading>가능성을 개발하는 개발자</CardHeading>
                </CardBox>
            </CardContainer>
            <CardContainer>
                <CardBox>
                    <BsGear size="8rem" />
                    <CardHeading>리팩토링을 생활화하는 개발자</CardHeading>
                </CardBox>
            </CardContainer>
            <CardContainer>
                <CardBox>
                    <IoChatbubbleEllipsesOutline size="8rem" />
                    <CardHeading>의사소통에 적극적인 개발자</CardHeading>
                </CardBox>
            </CardContainer>
            </CardList>
        </FeaturePageSection >
    );
}

const FeaturePageSection = styled.section`
    padding: 0 8%;
    margin-bottom: 300px;
    display: grid;
`;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
`;
const CardContainer = styled.div`
    padding: 20px;  
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.35);
    border: 1px solid transparent;
    border-radius: 20px;
    gap: 30px;
    transition: all 0.3s ease;

    &:hover {
        border-color: #FFF;
        box-shadow: none;
    }
`;

const CardBox = styled.div`
    min-width: 380px;
    height: 100%;
    display: grid;
    place-items: center;
    gap: 30px;
    color: #FFF;
`;

const CardHeading = styled.h1`
    margin-bottom: 20px;
    color: #FFF;
    font-size: 1.7rem;
    font-weight: bold;
`;