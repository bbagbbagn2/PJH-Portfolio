import * as React from 'react';
import styled from 'styled-components';

import { BsInfinity, BsGear } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import PortfolioTitle from "../../components/Title.tsx";

export default function Profile(): JSX.Element {
    return (
        <FeaturePageSection>
            <PortfolioTitle titleText='FEATURES'></PortfolioTitle>
            <CardList>
                <CardItem>
                <CardBox>
                    <BsInfinity size="8rem" />
                    <CardHeading>가능성</CardHeading>
                    </CardBox>
            </CardItem>
            <CardItem>
                <CardBox>
                    <BsGear size="8rem" />
                    <CardHeading>리팩토링</CardHeading>
                </CardBox>
            </CardItem>
            <CardItem>
                <CardBox>
                    <IoChatbubbleEllipsesOutline size="8rem" />
                    <CardHeading>의사소통</CardHeading>
                </CardBox>
            </CardItem>
            </CardList>
        </FeaturePageSection >
    );
}

const FeaturePageSection = styled.section`
    position: relative;
    padding: 0 8%;
    height: 100vh;
    min-height: 100vh;
`;

const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
`;

const CardItem = styled.li`
    min-width: 420px;
    padding: 20px;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.35);
    gap: 30px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        border-color: #FFF;
        box-shadow: none;
    }
`;

const CardBox = styled.div`
    padding: 2rem;
    height: 100%;
    display: grid;
    place-items: center;
    justify-content: center;
    color: #FFF;
`;

const CardHeading = styled.h1`
    padding: 2rem;
    color: #FFF;
    font-size: 1.7rem;
    font-weight: bold;
`;