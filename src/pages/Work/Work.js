import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HorizonLine from '../../components/HorizonLine';
import { AiOutlineCheck } from "react-icons/ai";

export default function Work() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedSubTitle, setSelectedSubTitle] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    const openModal = (imageUrl, title, subTitle) => {
        setSelectedImage(imageUrl);
        setSelectedTitle(title);
        setSelectedSubTitle(subTitle);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



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
                    <p>
                        필요한 아이콘을 무료로 다운로드 할 수 있는 웹 사이트입니다.
                        뿐만 아니라, 웹 사이트 내에서 아이콘을 수정하여 사용자에게 최적의 아이콘을 제공하는 것을 목적으로 합니다.

                        처음으로 Git을 활용하여 다른 사람들과의 협업을 했습니다.
                        HTML, CSS, JavaScript와 함께 React, CSS in JS를 배우면서 웹 개발의 기본 지식을 쌓을 수 있었던 프로젝트입니다.

                        백엔드 개발자와 협업하는 과정에 관해 많은 것을 배울 수 있었습니다.
                        필요한 명세 및 지식을 Notion을 통해 함께 공유하며 학습 할 수 있었습니다.

                        UI & UX를 고민하며 스스로 디자인 하였고, 다자인 과정에서 사용자 중심 인터페이스의 중요성을 알았습니다.
                    </p>
                    <HorizonLine />
                        <div>
                            <div>
                                <div>
                                    <AiOutlineCheck />
                                    <p>주요 기능</p>
                                </div>
                                <div>
                                    구글 로그인, 아이콘 다운로드 / 업로드, 사용자 팔로우, 해쉬태그, 아이콘 수정
                                </div>
                                <div>
                                    <AiOutlineCheck />
                                    <p>GitHub</p>
                                </div>
                                <div>
                                    구글 로그인, 아이콘 다운로드 / 업로드, 사용자 팔로우, 해쉬태그, 아이콘 수정, 
                                </div>
                            </div>
                        </div>
                </WorkWrapper>
            </WorkContainer>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 350px;
    height: 1080px;
    display: grid;
    grid-template-rows: min-content;
    align-items: start;
`;


const TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 70px;
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
    display: grid;
    justify-items: center;
`;

const WorkWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: grid;
    justify-items: center;
    background: #FFFFFF;
    box-shadow: 0px 1px 35px 7px rgba(234,234,234,0.25);
`;