import React from 'react';

import Container from '../components/Project';
import ProjectSlider from '../components/components/ProjectSlider';
import ProjectDescription from '../components/components/ProjectDescription.tsx';

import screen1 from '../work-images/drinkable/screen1.png';
import screen2 from '../work-images/drinkable/screen2.png';
import screen3 from '../work-images/drinkable/screen3.png';

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
    { src: screen1, alt: 'Drinkable: Screen 1.' },
    { src: screen2, alt: 'Drinkable: Screen 2.' },
    { src: screen3, alt: 'Drinkable: Screen 3.' },
  ];

  const paragraphs = [
    'DRINKABLE은 칵테일의 종류에 대한 정보를 제공하는 웹사이트입니다.',

    '이 프로젝트는 TypeScript 및 백엔드공부를 목적으로 개발한 개인 프로젝트입니다.',

    '프로젝트를 진행하면서 백엔드를 처음 다뤄본 경험이기 때문에 긴 시간이 소요되었지만, 구글링 및 자료들을 자세히 살펴보고 공부하여 코드를 완성할 수 있었습니다.',

    '해당 프로젝트는 HTML, CSS, TypeScript, React, style-components, Node.js, Express, MySQL과 같은 기술을 사용하였습니다.' +
      'TypeScript 및 백엔드 공부를 통해 프론트엔드 지식을 향상시키는 동시에 백엔드와의 협업 시 원할한 의사소통 능력을 키울 수 있는 경험을 얻었습니다.',

    'TypeScript 및 데이터베이스를 활용한 개인 프로젝트로, 해당 기술에 대한 깊은 학습을 할 수 있었습니다.',
  ];

  return (
    <Container>
      <ProjectSlider settings={settings} images={images} />
      <ProjectDescription paragraph={paragraphs} />
    </Container>
  );
}
