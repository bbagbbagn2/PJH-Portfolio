import React from 'react';

import Layout from './Layout.tsx';
import CustomSlider from './Slider.tsx';
import PostContainer from './Paragraph.tsx';

import screen1 from "./work-images/drinkable/screen1.png";
import screen2 from "./work-images/drinkable/screen2.png";
import screen3 from "./work-images/drinkable/screen3.png";

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
        { src: screen1, alt: "Drinkable: Screen 1." },
        { src: screen2, alt: "Drinkable: Screen 2." },
        { src: screen3, alt: "Drinkable: Screen 3." },
    ];

    const paragraphs = [
        "Block Smith는 Block Smith의 프론트엔드 개발자로, 과제 전형 시에 개발하였던 웹사이트입니다.",

        "해당 프로젝트는 NextJS, TypeScript, style-components, prisma와 같은 기술을 사용하였습니다.",
        
        "해당 프로젝트를 진행하며 처음 사용화였던 Next.JS 및 prisma에 대해 공부 할 수 있었습니다.",
    ];

    return (
        <Layout>
            <CustomSlider settings={settings} images={images} />
            <PostContainer paragraph={paragraphs} />
        </Layout>
    );
}