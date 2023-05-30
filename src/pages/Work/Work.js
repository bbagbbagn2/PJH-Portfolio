import React, { useState } from 'react';
import styled from 'styled-components';
import IconDB_Logo from '../../assets/images/IconDB_Logo.svg';
import DRINKABLE_Logo from '../../assets/images/DRINKABLE_Logo.svg';
import { AiOutlineGithub } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";   

export default function Work() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (imageUrl, title) => {
        setSelectedImage(imageUrl);
        setSelectedTitle(title);
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    
    return (
        <Container>
            <TitleWrapper>
                <Title>
                    <TitleColor>02 </TitleColor>PORTFOLIO
                </Title>
            </TitleWrapper>
            <WorkContainer>
                <WorkWrapper>
                    <ItemWrapper>
                        <WorkItems onClick={() => openModal(IconDB_Logo, "ICON_DB")} src={IconDB_Logo} alt="ICON_DB" />
                    </ItemWrapper>
                    <ItemWrapper>
                        <WorkItems
                        background="#EDEAE3"
                        onClick={() => openModal(DRINKABLE_Logo, "DRINKABLE")}
                        src={DRINKABLE_Logo} 
                        alt="DRINKALBE"
                        />
                    </ItemWrapper>
                    {isModalOpen && (
                        <ModalCotainer>
                            <ModalWrapper>
                                <ModalHeader>
                                <AiOutlineGithub size='35' />
                                <GrClose size='30' onClick={closeModal} />
                                </ModalHeader>
                                <Site>
                                    <ImageWrapper>
                                        {selectedImage && <img src={selectedImage} />}
                                    </ImageWrapper>
                                <div>
                                    <div>
                                        {selectedTitle && <h2>{selectedTitle}</h2>}
                                    </div>
                                    <p>SubTitle</p>
                                    <FaHtml5 size='50' fill='#E34F26' />
                                    <DiJavascript1 size='50' fill='#F7DF1E' />
                                    <FaReact size='50' fill='#61DAFB' />
                                    <SiStyledcomponents size='50' fill='#DB7093' />
                                    <SiMysql size='50' fill='#4479A1' />
                                    <FaNodeJs size='50' fill='#339933' />
                                </div>
                                </Site>
                            </ModalWrapper>
                        </ModalCotainer>
                    )}
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
    text-align: center;
    font-size: 42px;
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
    width: 640px;
    height: 320px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    box-shadow: 0px 1px 35px 7px rgba(234,234,234,0.25);
    cursor: pointer;
`;


const WorkItems = styled.img`
    width: 320px;
    height: 320px;
    transition: 0.4s ease 0s;

    background: ${(props) => (props.background || "#FFFFFF")};

    &: hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
`;

const ItemWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: inline-block;
    border: none;
    cursor: pointer;
`;

const ModalCotainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    background: #FFFFFF;
    z-index: 9999;
`;

const ModalWrapper = styled.div`
    padding: 5% 8%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 7% 1fr;
`;

const ModalHeader = styled.div`
    display: grid;
    grid-template-columns: 5% 1fr;
    justify-items: end;
    align-items: center;
`
const Site = styled.div`
    display: grid;
    grid-template-columns: 60% 1fr;
`;

const ImageWrapper = styled.div`
    padding-top: 15%;
    display: grid;
    justify-content: center;
`;