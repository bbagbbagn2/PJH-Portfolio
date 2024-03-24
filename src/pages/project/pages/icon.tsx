import React from 'react';

import Container from '../components/Project';
import ProjectSlider from '../components/components/ProjectSlider';
import ProjectParagraph from '../components/components/ProjectDescription.tsx';

import screen1 from '../work-images/icondb/screen1.png';
import screen2 from '../work-images/icondb/screen2.png';
import screen3 from '../work-images/icondb/screen3.png';
import screen4 from '../work-images/icondb/screen4.png';
import screen5 from '../work-images/icondb/screen5.png';

export default function Icondb() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const images = [
    { src: screen1, alt: 'Icondb: Screen 1.' },
    { src: screen2, alt: 'Icondb: Screen 2.' },
    { src: screen3, alt: 'Icondb: Screen 3.' },
    { src: screen4, alt: 'Icondb: Screen 4.' },
    { src: screen5, alt: 'Icondb: Screen 5.' },
  ];

  const paragraphs = [
    'ICONDB는 아이콘을 사용하려는 사용자들을 위한 무료 웹 서비스입니다.',

    'ICONDB는 여러가지 기능을 제공합니다.' +
      '다양한 아이콘을 무료로 다운로드 할 수 있습니다.' +
      '제목, 사용자, 해시태그 등 다양한 필터를 사용해 아이콘을 검색할 수 있습니다.',
    '사용자 간 팔로우를 통해 사용자의 아이콘을 한눈에 볼 수 있습니다.' +
      '좋아요 기능을 통해 마음에 드는 아이콘을 저장할 수 있습니다.',

    '프로젝트에서 HTML, CSS, JavaScript, React, styled-components, Node.js, Express.js, MySQL 등 다양한 기술을 활용했습니다. ' +
      '저는 프론트엔드 개발자로 프로젝트를 진행하면서 프로젝트 기획부터 디자인 및 구현까지 작업할 수 있는 경험을 쌓을 수 있었습니다.',

    '개발 초창기에 HTML/CSS, JavaScript를 사용해 개발했지만, 개발 진행 중 랜더링 및 속도에 대한 이슈가 걱정되어 팀원들과 상의 후 React를 사용해 프로젝트를 개발했습니다. ' +
      'CSS의 전역 스코프를 가지는 특징 때문에 개발 중 스타일 충돌이 발생하였고, 프로젝트를 개발할수록 CSS가 복잡해져 팀원과의 의사소통 시 문제가 발생하였습니다. ' +
      '이런 문제점을 해결하기 위해 CSS-in-JS인 styled-components를 사용하여 스타일 충돌 방지 및 팀원 간의 의사소통을 원할히 할 수 있었고 ' +
      'JS를 활용하여 조건부 스타일링과 동적인 스타일링을 할 수 있었습니다.',

    '개발 중 팀원 과의 일정 조율 및 회의 과정에서 약간의 갈등이 있었지만 충분한 대화를 통해 해결하여 안정적으로 개발 기간내에 프로젝트를 완성할 수 있었습니다. ' +
      '위 경험을 통해 후에 있을 팀 프로젝트에서 팀원 간의 갈등 발생 시, 더 수월한 갈등 해결을 할 수 있었습니다.',

    '위 프로젝트를 진행하며 React를 활용한 첫 프로젝트였기 때문에 해당 기술에 대해 많은 학습을 했습니다. ' +
      '다양한 Hook을 사용하여 프로젝트를 개발 할 수 있고, 중복된 코드는 컴포넌트화를 통해 코드를 간결하게 유지할 수 있습니다. ' +
      '개발적인 면 뿐만 아니라, 프로젝트 진행 중에 Notion을 사용하여 일정 관리 및 회의록을 작성하여 프로젝트의 완성도와 개발 기간 모두 만족할 수 있었습니다.',
  ];

  return (
    <Container>
      <ProjectSlider settings={settings} images={images} />
      <ProjectParagraph paragraph={paragraphs} />
    </Container>
  );
}
