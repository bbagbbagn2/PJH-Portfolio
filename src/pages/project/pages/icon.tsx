import React from 'react';

import Layout from '../components/Layout';
import CustomSlider from '../components/Slider';
import PostContainer from '../components/Paragraph';

import screen1 from '../work-images/icondb/screen1.png';
import screen2 from '../work-images/icondb/screen2.png';
import screen3 from '../work-images/icondb/screen3.png';
import screen4 from '../work-images/icondb/screen4.png';

export default function Icondb() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { src: screen1, alt: 'Icondb: Screen 1.' },
    { src: screen2, alt: 'Icondb: Screen 2.' },
    { src: screen3, alt: 'Icondb: Screen 3.' },
    { src: screen4, alt: 'Icondb: Screen 4.' },
  ];

  const paragraphs = [
    'ICON_DB는 아이콘을 사용하려는 이용자들을 위한 무료 배포 플랫폼으로, 기존 웹사이트와의 차별점을 갖추고 있습니다.',

    '기존의 웹사이트와는 달리 ICON_DB는 SVG 파일을 활용하여 즉석으로 아이콘을 변경할 수 있는 기능을 구현했습니다.',

    '프로젝트의 디자인은 아이콘의 무료 배포 목적에 맞추어 아이콘 리스트를 크게 보이도록 고안되었습니다.',

    '성능과 효율성에 주의를 기울여 해당 기능을 구현하는 것에 시간이 꽤 소요되었습니다.' +
      '팀원과의 일정 조율 및 완성도에 관한 일부 갈등이 있었으나 충분한 대화를 통해 문제를 해결할 수 있었습니다. 결과적으로, 안정적이고 완성도 있는 프로젝트를 개발할 수 있었습니다.',

    '해당 프로젝트에서는 HTML, CSS, JavaScript, React, style-components, Node.js, Express, MySQL, AWS등 다양한 기술을 활용했습니다.' +
      '디자인부터 기획 및 구현까지 다양한 분야에서 작업할 수 있는 경험을 쌓을 수 있었습니다.',

    'React와 JavaScript를 활용한 첫 프로젝트였기 때문에 해당 기술에 대해 많은 학습과 피드백을 얻을 수 있었습니다.',
  ];

  return (
    <Layout>
      <CustomSlider settings={settings} images={images} />
      <PostContainer paragraph={paragraphs} />
    </Layout>
  );
}
