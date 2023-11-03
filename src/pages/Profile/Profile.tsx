import React from 'react';
import styled from 'styled-components';

import { IoIosArrowDown } from "react-icons/io";

export default function Profile(): JSX.Element {
    const handleScroll = (targetHeight: number) => {
        window.scrollTo({
            top: targetHeight,
            behavior: 'smooth',
        });
    };

    const handleAbout = () => {
        handleScroll(800);
    };

    return (
        <ProfilePageSection>
            <ProfileBox>
                <CavalierArticle>
                    <CavalierBox>
                        <ProfilePageHeading>
                            Frontend
                            <br />
                            Developer.
                        </ProfilePageHeading>
                        <ProfilePageParagraph>
                            기본기를 중요하게 생각하고, 리팩토링을 생활화하는 개발자, 박지훈입니다.
                        </ProfilePageParagraph>
                    </CavalierBox>
                </CavalierArticle>
            </ProfileBox>
            <ContentBox>
                <ContentList>
                    <ContentItem>React 및 Typescript를 사용하여 프로젝트를 개발한 경험이 있습니다.</ContentItem>
                    <ContentItem>의사소통의 중요성을 인지하여 성공적인 개발을 위해 노력합니다.</ContentItem>
                </ContentList>
            </ContentBox>
        </ProfilePageSection >
    );
}

const ProfilePageSection = styled.section`
    position: relative;
    padding-bottom: 4.17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #3C8FDD 80%, #DBF227 20%);
    user-select: auto;
`;

const ProfileBox = styled.div`
    margin-top: calc(11.12rem + 2em);
    padding: 0 10rem;
    width: 100%;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ContentBox = styled(ProfileBox)`
    margin-top: auto;
`;

const CavalierArticle = styled.article`
    position: relative;
`;

const CavalierBox = styled.div`
    position: relative;
`;
const ProfilePageHeading = styled.h1`
    max-width: 30vw;
    color: #DBF227;
    font-size: 4.4em;
    font-family: Black Han Sans;
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: 0.2rem;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 0.5s, opacity 0.2s;
    transition-delay: 200ms;

    @media screen and (max-width: 780px) {
        font-size: 36px;
    }
`;

const ProfilePageParagraph = styled.p`
    width: 32vw;
    max-width: 701px;
    color: #FFF;
    font-size: 1.3em;
    line-height: 1.6;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 0.5s, opacity 0.2s;
    transition-delay: 310ms;
`;

const ContentList = styled.ul`
    width: 41%;
    display: flex;
    justify-content: space-between;
    color: #DBF227;
    font-size: 0.965em;
    line-height: 1.5;
`;

const ContentItem = styled.li`
    width: calc(50% - 1.731em);
`;
const ToAboutLink = styled.a`
    position: absolute;
    left: 50%;
    bottom: 20%;
    color: #103778;
    transform: translate(0, -50%);
    transition: all .5s;
    cursor: pointer;

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
