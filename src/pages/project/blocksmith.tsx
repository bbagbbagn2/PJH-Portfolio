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
        "Block Smith는 아이콘을 사용하려는 사람들을 위한 무료 배포 플랫폼입니다. 저희는 기존 웹사이트와의 차별점을 두었습니다.",

        "기존의 웹사이트와는 달리 ICON_DB는 svg 파일을 이용해 즉석으로 아이콘을 변경할 수 있는 기능을 구축하였습니다.",

        "프로젝트의 디자인은 아이콘 무료 배포 목적에에 맞도록 아이콘 리스트들을 크게 보이도록 디자인 하였습니다.",

        "전체적인 웹사이트의 UI를 디자인하고, 소셜 로그인 및 다운로드 & 업로드 기능을 axios를 통하여 백엔드와의 연결을 구축하였습니다." + 
        "성능과 효율성에 주의를 기울이면서 해당 기능을 구현하는 것은 시간이 걸렸습니다." + 
        "팀원과의 일정 조율 및 완성도에 관한 약간의 갈등이 있었지만, 충분한 대화를 통해 해결할 수 있었습니다. 결국, 저희는 안정적이고 완성도 있는 프로젝트를 개발할 수 있었습니다.",

        "해당 프로젝트는 NextJS, TypeScript, style-components, prisma와 같은 기술을 사용하였습니다." +
        "저는 디자인부터 기획 및 구현에 이르기까지 다양한 부분에서 작업할 수 있는 경험을 얻었습니다.",

        "React와 JavaScript를 활용한 첫 프로젝트였기 때문에 해당 기술에 대해 많은 공부를 하였고 많은 피드백을 얻었습니다.",
    ];

    return (
        <Layout>
            <CustomSlider settings={settings} images={images} />
            <PostContainer paragraph={paragraphs} />
        </Layout>
    );
}