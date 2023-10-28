import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import PortfolioTitle from '../../components/Title.tsx';
import { ReactComponent as ICONDBLogo } from "../../assets/images/IconDB/logo3.svg";
import { ReactComponent as DRINKABLELogo } from "../../assets/images/DRINKABLE/logo.svg";
import Main from '../../assets/images/IconDB/Main_Mobile.png';
import Posting from '../../assets/images/IconDB/Posting.PNG';
import Detail from '../../assets/images/IconDB/Detail_PNG.png';
import SignIn from '../../assets/images/IconDB/SignIn_Mobile.png';
import SignUp from '../../assets/images/IconDB/SignUp_Mobile.png';
import Profile from '../../assets/images/IconDB/Profile_Mine.png';
import About from '../../assets/images/Portfolio/About.PNG';
import Skills from '../../assets/images/Portfolio/Skills.PNG';
import Portfolio from '../../assets/images/Portfolio/Portfolio.PNG';
import Contact from '../../assets/images/Portfolio/Contact.PNG';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import '../../assets/font/Font.css';

export default function Work(): JSX.Element {

    return (
        <WorkPageSection>
            <PortfolioTitle titleText="WORK" />
            <PortfolioSection>
                <PortfolioList>
                    <PortfolioItem>
                        <ProjectLogoBox to="/icondb">
                            <ICONDBLogo />
                        </ProjectLogoBox>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>ICON_DB</ProjectInfoHeading>
                        </ProjectInfoBox>
                    </PortfolioItem>
                    <PortfolioItem>
                        <ProjectLogoBox to="/drinkable">
                            <DRINKABLELogo />
                        </ProjectLogoBox>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>DRINKABLE</ProjectInfoHeading>
                        </ProjectInfoBox>
                    </PortfolioItem>
                    <PortfolioItem>
                        <ProjectLogoBox to="/pjh-portfolio">
                            <DRINKABLELogo />
                        </ProjectLogoBox>
                        <ProjectInfoBox>
                            <ProjectInfoHeading>Personal Website</ProjectInfoHeading>
                        </ProjectInfoBox>
                        {/*<WorkPageBox>
                            <ProjectBox>
                                <ProjectTitleParagraph>포트폴리오 웹사이트</ProjectTitleParagraph>
                                <ProjectCol>
                                    <SliderBox>
                                        <CarouselProvider
                                            naturalSlideWidth={100}
                                            naturalSlideHeight={125}
                                            totalSlides={4}>
                                            <SliderImageBox>
                                                <Slider>
                                                    <Slide index={0}><SliderImage src={About} /></Slide>
                                                    <Slide index={1}><SliderImage src={Skills} /></Slide>
                                                    <Slide index={2}><SliderImage src={Portfolio} /></Slide>
                                                    <Slide index={3}><SliderImage src={Contact} /></Slide>
                                                </Slider>
                                            </SliderImageBox>
                                            <ButtonCol>
                                                <ButtonBack><BsArrowLeftCircle size="40" /></ButtonBack>
                                                <ButtonNext><BsArrowRightCircle size="40" /></ButtonNext>
                                            </ButtonCol>
                                        </CarouselProvider>
                                    </SliderBox>
                                    <DetailBox>
                                        <ProjectInfoBox>
                                            <b>포트폴리오 용도로 제작한 웹사이트</b>
                                            <span>
                                                입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                                                <br /><br />
                                                첫 개인 프로젝트로, <ExplanationSpan color='#ED3770'>순수 React</ExplanationSpan>로 개발을 완료하였습니다.
                                                후에 <ExplanationSpan color='#ED3770'>TypeScript</ExplanationSpan>로 프로젝트 <ExplanationSpan color='#ED3770'>리팩토링</ExplanationSpan>을 진행하였습니다.
                                                <br /><br />
                                                <ExplanationSpan color='#ED3770'>Styled-Components</ExplanationSpan>를 통해 진행한 프로젝트로,
                                                네이밍 및 스타일 컴포넌트와 공통 컴포넌트 간의 혼란을 줄이는 것에 집중하였습니다.
                                                이로 인해 <ExplanationSpan color='#ED3770'>네이밍</ExplanationSpan>에 대한 규칙을 알 수 있었고, <ExplanationSpan color='#ED3770'>S-Dot 방법</ExplanationSpan>을 이용해 스타일 컴포넌트와 공통 컴포넌트 간의 혼란을 줄일 수 있었습니다.
                                                <br /><br />
                                                또한, <ExplanationSpan color='#ED3770'>Netlify</ExplanationSpan>를 이용하여 웹사이트의 배포도 경함해볼 수 있었습니다.
                                            </span>
                                        </ProjectInfoBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>주요 기능</p>
                                            </ListTitleBox>
                                            <div>
                                                간단한 자기소개, 기술 스택, 프로젝트, 연락처
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>GitHub</p>
                                            </ListTitleBox>
                                            <div>
                                                <GithubLink href="https://github.com/bbagbbagn2/Portfolio">github.com/bbagbbagn2/JH Portfolio</GithubLink>
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>URL</p>
                                            </ListTitleBox>
                                            <div>
                                                <GithubLink href="https://parkproject.netlify.app/">JH Portfolio</GithubLink>
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>Frontend</p>
                                            </ListTitleBox>
                                            <div>
                                                <p>React, TypeScript, styled-components</p>
                                            </div>
                                        </SummaryBox>
                                        <SummaryBox>
                                            <ListTitleBox>
                                                ✔<p>Deployment</p>
                                            </ListTitleBox>
                                            <div>
                                                <p>Netlify</p>
                                            </div>
                                        </SummaryBox>
                                    </DetailBox>
                                </ProjectCol>
                            </ProjectBox>
    </WorkPageBox>*/}
                    </PortfolioItem>
                </PortfolioList>
            </PortfolioSection>
        </WorkPageSection>
    );
}

const WorkPageSection = styled.div`
    padding: 0 8%;
    height: 100vh;
    min-height: 100vh;
    display: grid;
    align-items: center;
`;

const PortfolioSection = styled.section`
`;

const PortfolioList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PortfolioItem = styled.li`
    position: relative;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: calc((100% - 8rem) / 3);
    margin-bottom: 1.2rem;
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

const ProjectLogoBox = styled(Link)`
    margin: 0;
    height: 9em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(245, 244,  252);
`;

const WorkPageBox = styled.div`
    display: grid;
    justify-items: center;
`;

const ProjectBox = styled.div`
    margin-bottom: 32px;
    display: grid;
    justify-items: center;
    border: 1px solid transparent;
    border-radius: 20px;
`;

const SliderBox = styled.div` 
    width: 85%;
    position: relative;
    border-radius: 10px;

    @media (max-width: 1024px) {
        margin-bottom: 30px;
    }
`

const SliderImageBox = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .2s;
`;

const ButtonCol = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ProjectCol = styled.div`
    display: grid;

    @media (max-width: 1024px) {
        place-items: center;
        grid-template-columns: 1fr;
    }
`;

const ProjectTitleParagraph = styled.p`
    font-family: Black Han Sans;
    font-size: 2.5rem;
    color: #FFF;
`;

const ProjectSubTitleParagraph = styled.div`
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: #6C757D;
    opacity: .8;
`;

const DetailBox = styled.div`
    display: grid;
`;

const ProjectInfoBox = styled.div`
    padding: 2rem;
    font-size: .9rem;
`;

const ProjectInfoHeading = styled.h5`
    font-size: 20px;
    color: #FFF;
`;

const ExplanationSpan = styled.span<{ color?: string }>`
    color: ${props => props.color};
`;

const SummaryBox = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: center;
`;

const ListTitleBox = styled.div`
    display: grid;
    grid-template-columns: 26px 1fr;
    align-items: center;
    font-size: 16px;
    font-weight: 900;
`;

const GithubLink = styled.a`
    color: #258DDB;
    word-break: break-all;
`