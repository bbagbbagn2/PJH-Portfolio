import React from 'react';

import Layout from './layout';
import CustomSlider from './Slider';
import PostContainer from './Paragraph';

import screen1 from "./work-images/tounou/screen1.png";
import screen2 from "./work-images/tounou/screen2.png";
import screen3 from "./work-images/tounou/screen3.png";
import screen4 from "./work-images/tounou/screen4.png";

export default function Drinkable() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 2000,
    };

    const images = [
        { src: screen1, alt: "Tounou: Screen 1." },
        { src: screen2, alt: "Tounou: Screen 2." },
        { src: screen3, alt: "Tounou: Screen 3." },
        { src: screen4, alt: "Tounou: Screen 4." },
    ];

    const paragraphs = [
        "Tounou Test는 Tounou의 프론트엔드 개발자 과제 전형으로 진행하였습니다.",

        "해당 프로젝트는 React, JavaScript, style-components와 같은 기술을 사용하였습니다.",
    ];

    return (
        <Layout>
            <CustomSlider settings={settings} images={images} />
            <PostContainer paragraph={paragraphs} />
        </Layout>
    );
}