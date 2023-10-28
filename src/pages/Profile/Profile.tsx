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
            <ProfilePageBox>
                <TitleBox>
                    <ProfilePageHeading>
                        PRONT-END DEVELOPER.
                    </ProfilePageHeading>
                    <ProfilePageSub>
                        가능성을 개발하는 개발자 박지훈입니다.
                    </ProfilePageSub>
                </TitleBox>
                <ToAboutLink onClick={handleAbout}><IoIosArrowDown size={24}/></ToAboutLink>
            </ProfilePageBox>
        </ProfilePageSection >
    );
}

const ProfilePageSection = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    display: grid;
    place-items: center;
    place-content: center;
`;

const ProfilePageBox = styled.div`
    display: grid;
`;

const ProfilePageHeading = styled.h1`
    background: transparent;
    border: none;
    color: #FFF;
    font-size: 5rem;
    font-family: Black Han Sans;
    font-weight: 300;
    letter-spacing: 0.2rem;

    @media screen and (max-width: 780px) {
        font-size: 36px;
    }
`;

const ProfilePageSub = styled.h3`
    color: #FFF;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
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
