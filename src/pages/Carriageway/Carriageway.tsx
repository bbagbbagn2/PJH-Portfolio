import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Carriageway() {
    return (
        <StyledCarriageway>
            <InnerContentBox>
                <Lanes>
                    <Lane>
                        <CavalierArticle>
                            <CavalierBox>
                                <Heading>
                                    개발,<br />디자인
                                </Heading>
                                <CavalierParagraph>
                                    오픈 소스,<br />개인 &<br />팀 프로젝트.<br />
                                </CavalierParagraph>
                            </CavalierBox>
                        </CavalierArticle>
                        <ProjectLink href='/project'>
                            <LinkBox>프로젝트 보러가기</LinkBox>
                        </ProjectLink>
                    </Lane>
                    <RightLane>
                        <CavalierArticle>
                            <CavalierBox>
                                <Heading>
                                    나의<br />이력서
                                </Heading>
                                <CavalierParagraph>
                                    자기소개,<br />스킬 &<br />프로젝트 소개.<br />
                                </CavalierParagraph>
                            </CavalierBox>
                        </CavalierArticle>
                        <ProjectLink href="">
                            <LinkBox>이력서 보러가기</LinkBox>
                        </ProjectLink>
                    </RightLane>
                </Lanes>
            </InnerContentBox>
        </StyledCarriageway>
    );
}

const StyledCarriageway = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: auto;

    @media (max-width: 580px) {
        margin-bottom: 10rem;
    }

    @media (min-width: 581px) and (max-width: 700px) {
        padding-bottom: 15vh;
    }

    @media (max-height: 1199px) {
        @media (min-width: 701px) {
            min-height: 100vh;
        }
    }

    @media (min-width: 701px) {
        @media (max-height: 1199px) {
            height: 100vh;
        }
    }
`;

const InnerContentBox = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-aspect-ratio: 1440 / 900) {
        margin-top: 4.2rem;
    }

    @media (max-width: 580px) {
        padding: 0 6vw;
    }

    @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
        > div {
            min-height: 40em;
        }
    }

    @media (max-width: 1500px) {
        max-width: unset;
        padding: 0 calc(6em - 2em);
    }

    @media (min-width: 1501px) {
        padding: 0 5em;
    }

`;

const Lanes = styled.div`
    width: 100%;
    display: flex;
    background-color: #F9F9F9;

    @media (max-width: 580px) {
        flex-direction: column;
    }
`;

const Lane = styled.div`
    padding: 6.95em;
    padding-left: 6em;
    
    :not(:last-of-type) {
        border-style: solid;
        border-width: 0 0 0.15rem 0;
        border-color: rgba(60, 143, 221, 0.3);
    }

    @media (min-width: 581px) {
        width: 50%;

        :not(:last-of-type) {
            border-bottom-width: 0;
            border-right-width: 0.15rem;
        }
    }

    @media (min-width: 581px) and (max-width: 700px) {
        padding-left: 4.5em;
        padding-right: 4.5em;
    }
`;

const RightLane = styled(Lane)`
    border: none;
`;

const CavalierArticle = styled.article`
    position: relative;
    margin-bottom: 4.5em;
    text-align: left;
`;

const CavalierBox = styled.div`
    position: relative;
`;

const Heading = styled.h1`
    margin: 0;
    font-size: 3.2em;
    font-weight: 900;
    color: #3c8fdd;
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: trnsform 0.5s, opacity 0.2s;

    @media screen and (min-width: 701px) {
        max-width: 30vw;
        transition-delay: 200ms;
    }
`;

const CavalierParagraph = styled.p`
    width: unset;
    font-size: 1.6em;
    color: #0B2B40;
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: trnsform 0.5s, opacity 0.2s;

    @media screen and (min-width: 701px) {
        max-width: 701px;
        transition-delay: 301ms;
    }
`;

const ProjectLink = styled.a`
    position: relative;
    min-width: 23.222em;
    display: inline-flex;
    background: transparent;
    font-size: 0.9em;
    font-weight: bold;
    text-transform: uppercase;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;

    :hover {
        div {
            color: #FFF;
            border-color: rgb(60, 143, 221);
        }

        div::before {
            transform: translateX(0);
            background: #3C8FDD;
        }
    }
    div::before {
        content: "";
        position: absolute;
        top: -0.1em;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 108%;
        background: currentColor;
        pointer-events: none;
        transform: translateX(-100%);
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        z-index: -1;
    }
`;

const LinkBox = styled.div`
    position: relative;
    padding: 1.25em 3em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid currentColor;
    color: #3C8FDD;
    z-index: 1;
`
