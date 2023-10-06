import * as React from 'react';
import styled from 'styled-components';

import PortfolioTitle from "../../components/Title.tsx";
import { BsInfinity, BsGear } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

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
    margin: 0 auto;
    margin-bottom: 300px;
    padding: 0 8%;
    max-width: 1280px;
`;

const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const CardItem = styled.li`
    margin-bottom: 1.2rem;
    position: relative;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: calc((100% - 2em) / 3);
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: #1A1E23;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.35);
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