import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from '../Header/Header.tsx';

export default function Icondb() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        autoPlay: true,
        autoPlaySpeed: 500,
        slideToShow: 1,
        arrows: false
    };

    const images = [
        { src: "", alt: "Drinkable: Screen 1." },
        { src: "", alt: "Drinkable: Screen 2." },
        { src: "", alt: "Drinkable: Screen 3." },
        { src: "", alt: "Drinkable: Screen 4." }
    ]
    return (
        <>
        <Header />
        <MainLayout>
            <PageHeader>
                <Heading>Drinkable</Heading>
            </PageHeader>
            <ImageContainer>
                <Slider {...settings}>
                    {images.map((index) => (
                        <SliderBox>
                            <SliderImage src={index.src} alt={index.alt} />
                        </SliderBox>
                    ))}
                </Slider>
            </ImageContainer>
            <PostContainer>
                <PostParagraph></PostParagraph>
            </PostContainer>
        </MainLayout>
        </>
    );
}

const MainLayout = styled.main`
    margin: 0 auto;
    padding: 0 3.5rem;
    max-width: 1400px;

    @media (min-width: 651px) {
        font-size: 18px;
    }
    @media (min-width: 1024px) {
        margin-top: calc(3.5rem * 1.2);
    }
`;

const PageHeader = styled.header`
    position: relative;
    margin-top: 1.1em;
    margin-bottom: 3.5rem;
    text-align: center;
`;

const Heading = styled.h1`
    margin: 0.67em 0;
    font-size: 1.802em;
    color: #474747;
    user-select: none;
    transition: color 0.6s;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const SliderBox = styled.div`
    position: relative;
    min-height: 40vw;
    max-height: 42.5vw;
    max-width: 1260px;
`;

const SliderImage = styled.img`
    width: auto;
    max-width: 100%;
    height: auto;
    user-select: none;
    border-style: none;
    cursor: pointer;
`;

const PreviousButton = styled.button`
    padding: 8px;
    margin-right: -8px;
    position: absolute;
    top: 50%;
    border: none;
    background-color: transparent;
    color: #000;
    outline: none;
    font-size: 100%;
    font-family: "system";
    text-decoration: none;
    appearance: none;
    transform: translateX(-100%) translateY(-50%);
    cursor: pointer;
`;

const NextButton = styled(PreviousButton)`
    margin-left: 0;
    margin-right: -8px;
    right: 0;
    transform: translateX(100%) translateY(-50%);
`;
const PostContainer = styled.div`
    margin: 0 auto;
    position: relative;
    max-width: 940px;
`;

const PostParagraph = styled.p`
    margin-bottom: 1.25em;
    color: #474747;
    line-height: normal;
`;

