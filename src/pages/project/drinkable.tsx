import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from './layout.tsx';
import Footer from '../Footer/Footer.tsx';

import screen1 from "./work-images/drinkable/screen1.png";
import screen2 from "./work-images/drinkable/screen2.png";
import screen3 from "./work-images/drinkable/screen3.png";



export default function Icondb() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 3000
    };

    const images = [
        { src: screen1, alt: "Drinkable: Screen 1." },
        { src: screen2, alt: "Drinkable: Screen 2." },
        { src: screen3, alt: "Drinkable: Screen 3." },
    ]
    return (
        <>
        <Layout>
                <Slider {...settings}>
                    {images.map((index) => (
                        <SliderBox>
                            <SliderImage src={index.src} alt={index.alt} />
                        </SliderBox>
                    ))}
                </Slider>
            <PostContainer>
                <PostParagraph></PostParagraph>
            </PostContainer>
        </Layout>
        <Footer />
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

