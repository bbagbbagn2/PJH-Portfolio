import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header.js';

export default function Main() {
    return (
        <>
            <Header />
            <MainPage>
                <Wrapper>
                    <ProfileContainer>
                        <ProfileWrapper>
                            <TitleWrapper>
                                <ProfileTitle>
                                    I<ProfileTitleColor>'</ProfileTitleColor>M
                                </ProfileTitle>
                                <ProfileTitle>
                                    A FRONT-END
                                </ProfileTitle>
                                <ProfileTitle>
                                    DEVELOPER<ProfileTitleColor>.</ProfileTitleColor>
                                </ProfileTitle>
                            </TitleWrapper>
                            <IntroduceWrapper>
                                <IntroduceTitle>
                                    도전을 두려워하지 않는 개발자
                                </IntroduceTitle>
                                <IntroduceTitle>
                                    박지훈입니다.
                                </IntroduceTitle>
                            </IntroduceWrapper>
                        </ProfileWrapper>
                    </ProfileContainer>
                    <Part1Container>
                        <Part1TitleWrapper>
                            <Part1Title>
                                <Part1TitleColor>01 </Part1TitleColor>
                                사용 가능한 스킬을 소개합니다!
                            </Part1Title>
                        </Part1TitleWrapper>
                    </Part1Container>
                </Wrapper>
            </MainPage>
        </>
    );
}

const MainPage = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background: #1A1E23;
`;

const Wrapper = styled.div`
    padding: 0 6%;
    display: grid;
`;


const ProfileContainer = styled.div`
    width: 100%;
    height: 1088px;
    min-height: 1088px;
    display: grid;
    place-items: center;
    place-content: center;
`;

const ProfileWrapper = styled.div`
    display: grid;
    width: 100%;
`;

const ProfileTitle = styled.h1`
    margin: 0;
    font-size: 65px;
    color: #FFFFFF;
`;
const ProfileTitleColor = styled.span`
    font-size: 65px;
    color: #98FB98;
`;

const TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 50px;
`;

const IntroduceWrapper = styled.div`
`;

const IntroduceTitle = styled.h5`
    margin: 0;
    line-height: 1.8em;
    font-size: 24px;
    color: #FFFFFF;
`;

const Part1Container = styled.div`
    height: 1250px;
    display: grid;
`;

const Part1TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 20px;
`;

const Part1Title = styled.h3`
    color: #FFFFFF;
    line-height: 1.3em;
    text-align: center;
    font-size: 42px;
`;
const Part1TitleColor = styled.span`
    font-size: 42px;
    color: #939DAB;
`;