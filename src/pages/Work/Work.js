import React from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import PortfolioTitle from '../../components/Title';
import '../../assets/font/Font.css';

export default function Work() {

    return (
        <Container>
            <PortfolioTitle titleNumber="02" titleText="PORTFOLIO" />
            <WorkContainer>
                <WorkWrapper>
                    <ProjectTitle>ICON_DB</ProjectTitle>
                    <ProjectSubTitle>2022.03 ~ 2022.06 팀 프로젝트(FE2, BE1)</ProjectSubTitle>
                    <ProjectWrapper>
                        <SliderContainer>
                       <CarouselProvider
                       naturalSlideWidth={100}
                       naturalSlideHeight={125}
                       totalSlides={3}>
                        <Slider>
                            <Slide index={0}><img src="../../assets/images/Main_PC.png" /></Slide>
                            <Slide index={1}><img src="../../assets/images/IconDB_Logo.svg" /></Slide>
                            <Slide index={2}><img src="../../assets/images/DRINKABLE_Logo.svg" /></Slide>
                        </Slider>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                       </CarouselProvider>
                       </SliderContainer>
                        <ExplanationWrapper>
                            <Explanation>
                                <b>필요한 아이콘을 무료로 다운로드 할 수 있는 웹 사이트</b>
                                <span>
                                    입니다. 뿐만 아니라, 웹 사이트 내에서 아이콘을 수정하여 사용자에게 최적의 아이콘을 제공하는 것을 목적으로 합니다.
                                    <br /><br />
                                    처음으로 <SpanColor color='#ED3770'>Git</SpanColor>을 활용하여 다른 사람들과의 협업을 했습니다.
                                    <SpanColor color='#ED3770'> HTML, CSS, JavaScript</SpanColor>와 함께 <SpanColor color='#ED3770'>React, CSS in JS</SpanColor>를 배우면서 웹 개발의 기본 지식을 쌓을 수 있었던 프로젝트입니다.
                                    <br /><br />
                                    <SpanColor color='#ED3770'>백엔드 개발자와 협업</SpanColor>하는 과정에 관해 많은 것을 배울 수 있었습니다.
                                    필요한 명세 및 지식을 <SpanColor color='#ED3770'>Notion</SpanColor>을 통해 함께 공유하며 학습 할 수 있었습니다.
                                    <br /><br />
                                    UI & UX를 고민하며 스스로 디자인 하였고, 다자인 과정에서 <SpanColor color='#ED3770'>사용자 중심 인터페이스</SpanColor>의 중요성을 알았습니다.
                                </span>
                            </Explanation>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>주요 기능</p>
                                </ListTitle>
                                <div>
                                    구글 로그인, 아이콘 다운로드 / 업로드, 사용자 팔로우, 해쉬태그, 아이콘 수정
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>GitHub</p>
                                </ListTitle>
                                <div>
                                    <GithubLink href="https://github.com/stack0801/Icon_DB">github.com/stack0801/Icon_DB</GithubLink>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>Frontend</p>
                                </ListTitle>
                                <div>
                                    <p>React, styled-components, JavaScript</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>Backend</p>
                                </ListTitle>
                                <div>
                                    <p>Node.js</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>DataBase</p>
                                </ListTitle>
                                <div>
                                    <p>MySQL</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>Deployment</p>
                                </ListTitle>
                                <div>
                                    <p>AWS</p>
                                </div>
                            </ListWrapper>
                        </ExplanationWrapper>
                    </ProjectWrapper>
                </WorkWrapper>
            </WorkContainer>
            <WorkContainer>
                <WorkWrapper>
                    <ProjectTitle>포트폴리오 웹사이트</ProjectTitle>
                    <ProjectSubTitle>2023.02 개인 프로젝트</ProjectSubTitle>
                    <ProjectWrapper>
                        <div />
                        <ExplanationWrapper>
                            <Explanation>
                                <b>포트폴리오 용도로 제작한 웹사이트</b>
                                <span>
                                    입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                                    <br /><br />
                                    첫 개인 프로젝트로, <SpanColor color='#ED3770'>순수 React</SpanColor>로 개발을 완료하였습니다.
                                    또한, <SpanColor color='#ED3770'>Netlify</SpanColor>를 이용하여 웹사이트의 배포도 경함해볼 수 있었습니다.
                                </span>
                            </Explanation>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>주요 기능</p>
                                </ListTitle>
                                <div>
                                    간단한 자기소개, 기술 스택, 프로젝트 경험, 연락처
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>GitHub</p>
                                </ListTitle>
                                <div>
                                    <GithubLink href="https://github.com/bbagbbagn2/Portfolio">github.com/bbagbbagn2/Portfolio</GithubLink>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>URL</p>
                                </ListTitle>
                                <div>
                                    <GithubLink href="https://parkproject.netlify.app/">park-portfolio</GithubLink>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>Frontend</p>
                                </ListTitle>
                                <div>
                                    <p>React, styled-components</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    ✔<p>Deployment</p>
                                </ListTitle>
                                <div>
                                    <p>Netlify</p>
                                </div>
                            </ListWrapper>
                        </ExplanationWrapper>
                    </ProjectWrapper>
                </WorkWrapper>
            </WorkContainer>
        </Container >
    );
}

const Container = styled.div`
    margin-top: 350px;
    height: 2100px;
`;

const WorkContainer = styled.div`
    box-sizing: border-box;
    display: grid;
    justify-items: center;
`;

const WorkWrapper = styled.div`
    padding: 3rem;
    margin-bottom: 32px;
    width: 60%;
    display: grid;
    justify-items: center;
    background: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0px 1px 35px 7px rgba(234,234,234,0.25);
`;

const SliderContainer = styled.div` 
    background: linear-gradient(270deg, rgba(247,249,255,1) 0%, rgba(242,246,255,1) 100%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 90%;
    position: relative;
    height: 100%;
    max-height: 420px;
    border-radius: 10px;
`

const SliderImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const SliderItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  opacity: 0;
  background: linear-gradient(270deg, rgba(247,249,255,1) 0%, rgba(242,246,255,1) 100%);
  cursor: grab;
  
  &-content {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: .4s;
    
    > * {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .2s;
`;

const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ProjectTitle = styled.div`
    padding-bottom: 0.5rem;
    font-family: Black Han Sans;
    font-size: 2.5rem;
    color: #222;
`;

const ProjectSubTitle = styled.div`
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: #6C757D;
    opacity: .8;
`;

const ExplanationWrapper = styled.div`
    display: grid;
`;

const Explanation = styled.div`
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #CCC;
`;

const SpanColor = styled.span`
    color: ${props => props.color};
`;

const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: center;
`;

const ListTitle = styled.div`
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