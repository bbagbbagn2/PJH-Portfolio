import React from 'react';

import Layout from '../components/Layout';
import CustomSlider from '../components/Slider';
import PostContainer from '../components/Paragraph';

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
    cssEase: "linear",
  };

  const images = [
    { src: screen1, alt: 'Icondb: Screen 1.' },
    { src: screen2, alt: 'Icondb: Screen 2.' },
    { src: screen3, alt: 'Icondb: Screen 3.' },
    { src: screen4, alt: 'Icondb: Screen 4.' },
    { src: screen5, alt: 'Icondb: Screen 5.' },
  ];

  const paragraphs = [
    'ICONDB는 아이콘을 사용하려는 사용자들을 위한 무료 웹 서비스로, 기존 웹사이트와의 차별점을 갖추고 있습니다.',

    '기존의 웹사이트와는 달리 ICONDB는 SVG 포맷을 활용하여 즉석으로 아이콘을 변경할 수 있는 기능을 구현했습니다.',

    '프로젝트에서 HTML, CSS, JavaScript, React.js, styled-components, Node.js, Express.js, MySQL, AWS 등 다양한 기술을 활용했습니다. ' +
    '저는 프론트엔드 개발자로 개발을 진행하면서 프로젝트 기획부터 디자인 및 구현까지 다양한 분야에서 작업할 수 있는 경험을 쌓을 수 있었습니다.',

    '처음에는 HTML과 CSS를 사용하여 개발하였지만, 후에 랜더링 및 속도에 대한 이슈가 걱정되어 React로 전환했습니다. ' +
    'CSS의 전역 스코프를 가지는 특징 때문에 개발 중 스타일 충돌이 발생하였고, 프로젝트를 개발할수록 CSS가 복잡해져 팀원과의 의사소통 시 문제가 발생하였습니다. ' +
    '이런 문제점을 해결하기 위해 CSS-in-JS인 styled-components를 사용하여 스타일 충돌 방지 및 팀원 간의 의사소통을 원할히 할 수 있었고 ' +
    'JS를 활용하여 조건부 스타일링과 동적인 스타일링을 할 수 있었습니다.',

    '개발 중 팀원 과의 일정 조율 및 회의 과정에서 약간의 갈등이 있었지만 충분한 대화를 통해 해결하여 안정적으로 개발 기간내에 프로젝트를 완성할 수 있었습니다. ' +
    '위 경험을 통해 후에 있을 팀 프로젝트에서 팀원 간의 갈등 발생 시, 더 수월한 갈등 해결을 할 수 있었습니다.',

    '위 프로젝트를 진행하며 React.js를 활용한 첫 프로젝트였기 때문에 해당 기술에 대해 많은 학습을 했습니다. ' +
    '다양한 Hook을 사용하여 프로젝트를 개발 할 수 있고, 중복된 코드는 컴포넌트화를 통해 코드를 간결하게 유지할 수 있습니다. ' + 
    '개발적인 면 뿐만 아니라, 프로젝트 진행 중에 Notion을 사용하여 일정 관리 및 회의록을 작성하여 프로젝트의 완성도와 개발 기간 모두 만족할 수 있었습니다.'
  ];

  return (
    <Layout>
      <CustomSlider settings={settings} images={images} />
      <PostContainer paragraph={paragraphs} />
    </Layout>
  );
}
