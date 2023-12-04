import React from 'react';
import styled from 'styled-components';

export default function Profile() {
    return (
        <ProfilePageSection>
            <ProfileBox>
                <CavalierArticle>
                    <CavalierBox>
                        <ProfilePageHeading>
                            Frontend<br />Developer.
                        </ProfilePageHeading>
                        <ProfilePageParagraph>
                            기본기를 중요하게 생각하고 리팩토링을 생활화하는 개발자, 박지훈입니다.
                        </ProfilePageParagraph>
                    </CavalierBox>
                </CavalierArticle>
                <CavalierFigure>

                </CavalierFigure>
            </ProfileBox>
            <ContentBox>
                <ContentList>
                    <ContentItem>React 및 Typescript를 사용하여 프로젝트를 개발한 경험이 있습니다.</ContentItem>
                    <ContentItem>의사소통의 중요성을 인지하고 있으며 성공적인 개발을 위해 노력합니다.</ContentItem>
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
    background: #3c8fdd;
    user-select: auto;
    z-index: 3;

    @media (max-width: 580px) {
        margin-bottom: 10rem;
        padding-bottom: 0;
    }

    @media (max-width: 700px) {
        font-size: 0.95em;
    }

    @media (min-width: 581px) {
        background: linear-gradient(90deg, #3C8FDD 67%, #DBF227 33%);
    }

    @media (max-width: 580px) {
        padding-bottom: 0;
    }
`;

const ProfileBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 580px) {
        margin-top: calc(11.12em + 6em);
        padding: 0 15vw;
    }

    @media (min-width: 581px) {
        margin-top: calc(11.12rem + 2em);
    }

    @media (min-width: 701px) {
        padding: 0 10rem;
    }

    @media (min-width: 701px) and (max-width: 1500px){
        max-width: 1500px;
    }

    @media (min-width: 1501px) {
        max-width: 1760px;
    }
`;

const ContentBox = styled(ProfileBox)`
    margin-top: auto;

    
    @media (max-width: 580px) {
        margin-top: 7em;
        margin-bottom: 4em;
        padding: 0 15vw;
    }
`;

const CavalierArticle = styled.article`
    position: relative;
    text-align: left;

    @media (min-width: 701px) {
        margin-top: -3.5em;
    }
`;

const CavalierBox = styled.div`
    position: relative;
`;

const ProfilePageHeading = styled.h1`
    color: #DBF227;
    font-size: 4em;
    line-height: 1.1;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 0.5s, opacity 0.2s;

    @media (max-width: 580px) {
        font-size: 5em;
    }

    @media (min-width: 581px) {
        font-size: 4.4em;
    }

    @media (min-width: 701px) {
        max-width: 30vw;    
        transition-delay: 0.2s;
    }
    
`;

const ProfilePageParagraph = styled.p`
    color: #FFF;
    line-height: 1.6;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 0.5s, opacity 0.2s;

    @media (max-width: 580px) {
        font-size: 2em;
    }

    @media (min-width: 581px) {
        font-size: 1.3em;
    }

    @media (max-width: 700px) {
        max-width: 20em;
    }

    @media (min-width: 701px) {
        width: 32vw;
        max-width: 701px;
        font-size: 1.07em;
        transition-delay: 310ms;
    }
`;

const CavalierFigure = styled.figure`
    margin: 0;
    position: relative;
    width: 23.2334em;
    height: 24.67em;
    border: 0.115rem solid #FFF;
    z-index: 1;

    
    @media (max-width: 581px) {
        display: none;
    }
    
    @media (min-width: 701px) {
        margin-right: calc(6em + 4em);
    }
`;

const ContentList = styled.ul`
    display: flex;
    justify-content: space-between;
    color: #DBF227;
    line-height: 1.5;

    
    @media (max-width: 700px) {
        font-size: 1.2em;
    }

    @media (min-width: 701px) {
        width: 41%;
        font-size: 0.965em;
    }
`;

const ContentItem = styled.li`
    width: calc(50% - 1.731em);
`;