import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BsInfinity, BsGear } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function Profile(): JSX.Element {
    return (
        <FeaturePageSection>
            <div>
                <h1>Features</h1>
            </div>
            <CardContainer>
                <CardBox>
                    <BsInfinity />
                    <CardHeading>가능성을 개발하는 개발자</CardHeading>
                </CardBox>
            </CardContainer>
            <CardContainer>
                <CardBox>
                    <BsGear />
                    <CardHeading>리팩토링을 생활화하는 개발자</CardHeading>
                </CardBox>
            </CardContainer>
            <CardContainer>
                <CardBox>
                    <IoChatbubbleEllipsesOutline />
                    <CardHeading>켜뮤니케이션에 적극적인 개발자</CardHeading>
                </CardBox>
            </CardContainer>
        </FeaturePageSection >
    );
}

const FeaturePageSection = styled.section`
    display: grid;
    place-items: center;
    place-content: center;
`;

const CardContainer = styled.div`
    padding: 30px;
    display: flex;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #FFF;
`;

const CardHeading = styled.h1`
    margin-bottom: 20px;
    color: #FFF;
    font-size: 1.7rem;
    font-weight: bold;
`;

const TitleBox = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

const ToAboutLink = styled.a`
    position: absolute;
    left: 50%;
    bottom: 20%;
    color: #FFF;
    transform: translate(0, -50%);
    transition: all .5s;

    &:hover {
        opacity: 0.7;
    }

    &::before {
        position: absolute;
        top: -11px;
        left:  -10px;
        z-index: -1;
        content: "";
        width: 44px;
        height: 44px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
        border-radius: 100%;
        animation: pulse 3s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                opacity: 0;
            }
            15%, 45% {
                opacity: 1;
            }
            60% {
                box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
                opacity: 0;
            }
        }
`;
