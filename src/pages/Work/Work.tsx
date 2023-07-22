import React from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import PortfolioTitle from '../../components/Title.tsx';
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
            <PortfolioTitle titleNumber="02" titleText="PORTFOLIO" />
            <WorkPageBox>
                <ProjectBox>
                    <ProjectTitleParagraph>ICON_DB</ProjectTitleParagraph>
                    <ProjectSubTitleParagraph>2022.03 ~ 2022.06 팀 프로젝트(FE2, BE1)</ProjectSubTitleParagraph>
                    <ProjectCol>
                        <SliderBox>
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={125}
                                totalSlides={6}>
                                <SliderImageBox>
                                    <Slider>
                                        <Slide index={0}><SliderImage src={Main} /></Slide>
                                        <Slide index={1}><SliderImage src={Posting} /></Slide>
                                        <Slide index={2}><SliderImage src={Detail} /></Slide>
                                        <Slide index={3}><SliderImage src={SignIn} /></Slide>
                                        <Slide index={4}><SliderImage src={SignUp} /></Slide>
                                        <Slide index={5}><SliderImage src={Profile} /></Slide>
                                    </Slider>
                                </SliderImageBox>
                                <ButtonCol>
                                    <ButtonBack><BsArrowLeftCircle size="40" /></ButtonBack>
                                    <ButtonNext><BsArrowRightCircle size="40" /></ButtonNext>
                                </ButtonCol>
                            </CarouselProvider>
                        </SliderBox>
                        <DetailBox>
                            <ExplanationBox>
                                <b>필요한 아이콘을 무료로 다운로드 할 수 있는 웹 사이트</b>
                                <span>
                                    입니다. 뿐만 아니라, 웹 사이트 내에서 아이콘을 수정하여 사용자에게 최적의 아이콘을 제공하는 것을 목적으로 합니다.
                                    <br /><br />
                                    처음으로 <ExplanationSpan color='#ED3770'>Git</ExplanationSpan>을 활용하여 다른 사람들과의 협업을 했습니다.
                                    <ExplanationSpan color='#ED3770'> HTML, CSS, JavaScript</ExplanationSpan>와 함께 <ExplanationSpan color='#ED3770'>React, CSS in JS</ExplanationSpan>를 배우면서 웹 개발의 기본 지식을 쌓을 수 있었던 프로젝트입니다.
                                    <br /><br />
                                    <ExplanationSpan color='#ED3770'>백엔드 개발자와 협업</ExplanationSpan>하는 과정에 관해 많은 것을 배울 수 있었습니다.
                                    필요한 명세 및 지식을 <ExplanationSpan color='#ED3770'>Notion</ExplanationSpan>을 통해 함께 공유하며 학습 할 수 있었습니다.
                                    <br /><br />
                                    UI & UX를 고민하며 스스로 디자인 하였고, 다자인 과정에서 <ExplanationSpan color='#ED3770'>사용자 중심 인터페이스</ExplanationSpan>의 중요성을 알았습니다.
                                </span>
                            </ExplanationBox>
                            <SummaryBox>
                                <ListTitleBox>
                                    ✔<p>주요 기능</p>
                                </ListTitleBox>
                                <div>
                                    구글 로그인, 아이콘 다운로드 / 업로드, 사용자 팔로우, 해쉬태그, 아이콘 수정
                                </div>
                            </SummaryBox>
                            <SummaryBox>
                                <ListTitleBox>
                                    ✔<p>GitHub</p>
                                </ListTitleBox>
                                <div>
                                    <GithubLink href="https://github.com/stack0801/Icon_DB">github.com/stack0801/Icon_DB</GithubLink>
                                </div>
                            </SummaryBox>
                            <SummaryBox>
                                <ListTitleBox>
                                    ✔<p>Frontend</p>
                                </ListTitleBox>
                                <div>
                                    <p>React, JavaScript, styled-components </p>
                                </div>
                            </SummaryBox>
                            <SummaryBox>
                                <ListTitleBox>
                                    ✔<p>Backend</p>
                                </ListTitleBox>
                                <div>
                                    <p>Node.js</p>
                                </div>
                            </SummaryBox>
                            <SummaryBox>
                                <ListTitleBox>
                                    ✔<p>DataBase</p>
                                </ListTitleBox>
                                <div>
                                    <p>MySQL</p>
                                </div>
                            </SummaryBox>
                            <SummaryBox>
                                <ListTitleBox>
                                    ✔<p>Deployment</p>
                                </ListTitleBox>
                                <div>
                                    <p>AWS</p>
                                </div>
                            </SummaryBox>
                        </DetailBox>
                    </ProjectCol>
                </ProjectBox>
            </WorkPageBox>
            <WorkPageBox>
                <ProjectBox>
                    <ProjectTitleParagraph>포트폴리오 웹사이트</ProjectTitleParagraph>
                    <ProjectSubTitleParagraph>2023.02 개인 프로젝트</ProjectSubTitleParagraph>
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
                            <ExplanationBox>
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
                            </ExplanationBox>
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
            </WorkPageBox>
        </WorkPageSection>
    );
}

const WorkPageSection = styled.div`
    height: 100%;
    margin-bottom: 300px;
`;

const WorkPageBox = styled.div`
    box-sizing: border-box;
    display: grid;
    justify-items: center;
`;

const ProjectBox = styled.div`
    padding: 3rem;
    margin-bottom: 32px;
    width: 60%;
    display: grid;
    justify-items: center;
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0px 1px 35px 7px rgba(234,234,234,0.25);
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
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1024px) {
        place-items: center;
        grid-template-columns: 1fr;
    }
`;

const ProjectTitleParagraph = styled.p`
    margin: 0;
    padding-bottom: 0.5rem;
    font-family: Black Han Sans;
    font-size: 2.5rem;
    color: #222;
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

const ExplanationBox = styled.div`
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #CCC;
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