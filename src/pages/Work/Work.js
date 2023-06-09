import React from 'react';
import styled from 'styled-components';
import HorizonLine from '../../components/HorizonLine';
import { AiOutlineCheck } from "react-icons/ai";

export default function Work() {

    return (
        <Container>
            <TitleWrapper>
                <Title>
                    <TitleColor>02 </TitleColor>PORTFOLIO
                </Title>
            </TitleWrapper>
            <WorkContainer>
                <WorkWrapper>
                    <h2>ICON_DB</h2>
                    <p>2022.03 ~ 2022.06 팀 프로젝트(FE2, BE1)</p>
                    <ProjectWrapper>
                        <div />
                        <ExplanationWrapper>
                            <p>
                                <span>
                                    필요한 아이콘을 무료로 다운로드 할 수 있는 웹 사이트입니다.
                                    뿐만 아니라, 웹 사이트 내에서 아이콘을 수정하여 사용자에게 최적의 아이콘을 제공하는 것을 목적으로 합니다.
                                    <br /><br />
                                    처음으로 Git을 활용하여 다른 사람들과의 협업을 했습니다.
                                    HTML, CSS, JavaScript와 함께 React, CSS in JS를 배우면서 웹 개발의 기본 지식을 쌓을 수 있었던 프로젝트입니다.
                                    <br /><br />
                                    백엔드 개발자와 협업하는 과정에 관해 많은 것을 배울 수 있었습니다.
                                    필요한 명세 및 지식을 Notion을 통해 함께 공유하며 학습 할 수 있었습니다.
                                    <br /><br />
                                    UI & UX를 고민하며 스스로 디자인 하였고, 다자인 과정에서 사용자 중심 인터페이스의 중요성을 알았습니다.
                                </span>
                            </p>
                            <HorizonLine />
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>주요 기능</p>
                                </ListTitle>
                                <div>
                                    구글 로그인, 아이콘 다운로드 / 업로드, 사용자 팔로우, 해쉬태그, 아이콘 수정
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>GitHub</p>
                                </ListTitle>
                                <div>
                                    <a href="https://github.com/stack0801/Icon_DB">github.com/stack0801/Icon_DB</a>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>Frontend</p>
                                </ListTitle>
                                <div>
                                    <p>React, styled-components, JavaScript</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>Backend</p>
                                </ListTitle>
                                <div>
                                    <p>Node.js</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>DataBase</p>
                                </ListTitle>
                                <div>
                                    <p>MySQL</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>Deployment</p>
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
                    <h2>포트폴리오 웹사이트</h2>
                    <p>2023.02 개인 프로젝트</p>
                    <ProjectWrapper>
                        <div />
                        <ExplanationWrapper>
                            <p>
                                <span>
                                    포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                                    <br /><br />
                                    첫 개인 프로젝트로, 순수 React로 개발을 완료하였습니다. 
                                    또한, Netlify를 이용하여 웹사이트의 배포도 경함해볼 수 있었습니다.
                                </span>
                            </p>
                            <HorizonLine />
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>주요 기능</p>
                                </ListTitle>
                                <div>
                                    간단한 자기소개, 기술 스택, GitHub 링크, 프로젝트 경험
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>GitHub</p>
                                </ListTitle>
                                <div>
                                    <a href="https://github.com/bbagbbagn2/Portfolio">github.com/bbagbbagn2/Portfolio</a>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>URL</p>
                                </ListTitle>
                                <div>
                                    <a href="https://parkproject.netlify.app/">park-portfolio</a>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>Frontend</p>
                                </ListTitle>
                                <div>
                                    <p>React, styled-components</p>
                                </div>
                            </ListWrapper>
                            <ListWrapper>
                                <ListTitle>
                                    <AiOutlineCheck />
                                    <p>Deployment</p>
                                </ListTitle>
                                <div>
                                    <p>Netlify</p>
                                </div>
                            </ListWrapper>
                        </ExplanationWrapper>
                    </ProjectWrapper>
                </WorkWrapper>
            </WorkContainer>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 350px;
    height: 2100px;
`;


const TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 70px;
    display: grid;
    align-items: start;
`;

const Title = styled.h3`
    color: #FFFFFF;
    line-height: 1.3em;
    font-size: 42px;

    text-align: ${(props) => props.textAlign || "center"};
    color: ${(props) => props.color || "#FFFFFF"};
`;

const TitleColor = styled.span`
    font-size: 42px;
    color: #939DAB;
`;

const WorkContainer = styled.div`
    margin-bottom: 60px;
    display: grid;
    justify-items: center;
`;

const WorkWrapper = styled.div`
    width: 65%;
    height: 100%;
    display: grid;
    justify-items: center;
    background: #FFFFFF;
    box-shadow: 0px 1px 35px 7px rgba(234,234,234,0.25);
`;

const ProjectWrapper = styled.div`

padding: 1% 3%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ExplanationWrapper = styled.div`
    display: grid;
`;

const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

const ListTitle = styled.div`
    display: grid;
    grid-template-columns: 26px 1fr;
    align-items: center;
    font-size: 16px;
    font-weight: 900;
`;