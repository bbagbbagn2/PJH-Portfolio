import { ICONDB_IMAGES, DRINKABLE_IMAGES } from '../work-images';

interface Image {
  src: string;
  alt: string;
}

interface Stack {
  name: string;
}

interface Project {
  number?: string;
  category: string;
  title: string;
  images: Image[];
  description: string[];
  stack: Stack[];
  live?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    number: '01',
    category: 'frontend',
    title: 'icondb',
    images: ICONDB_IMAGES,
    description: [
      'ICONDB는 아이콘을 사용하려는 사용자들을 위한 무료 웹 서비스입니다.',

      '저는 프론트엔드 개발 뿐만 아니라 프로젝트 기획, 배포까지의 전 과정을 진행했습니다.',

      'HTML5, CSS3, JavaScript를 사용한 개발 환경을 구축했지만, 개발 진행 중 리랜더링 이슈로 인해 팀원들과 상의 후 React와 styled-components로 개발 환경을 변경했습니다.',

      '프로젝트를 진행하면서 React에 대한 기술을 많이 학습할 수 있었습니다. ' +
        '다양한 Hook을 적절히 사용할 수 있게 되었고, 컴포넌트화를 통해 코드 중복을 20% 줄였습니다. ' +
        '또한, Notion을 사용한 일정 관리, 회의록을 통해 프로젝트의 개발 기간을 10% 절감할 수 있었습니다. ',
    ],
    stack: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'styled-components' },
      { name: 'Axios' },
      { name: 'Node.js' },
    ],
    github: process.env.REACT_APP_GITHUB_ICONDB,
  },
  {
    number: '02',
    category: 'fullstack',
    title: 'drinkable',
    images: DRINKABLE_IMAGES,
    description: [
      'DRINKABLE은 칵테일의 종류에 대한 정보를 제공하는 웹사이트입니다.',

      '이 프로젝트는 TypeScript 및 백엔드 공부를 목적으로 개발한 개인 프로젝트입니다. 백엔드에 대한 지식이 부족했기 때문에 DB 설계 및 Node.js 학습에 긴 시간이 소요되었지만, 구글링 및 여러 자료들을 자세히 살펴보며 백엔드 코드를 완성할 수 있었습니다.',

      '해당 프로젝트는 HTML, CSS, TypeScript, React, style-components, Node.js, Express, MySQL과 같은 기술을 사용하였습니다. TypeScript 및 Node.js공부를 통해 프론트엔드 지식을 향상시키는 동시에 백엔드와의 협업 시 원할한 의사소통 능력을 키울 수 있는 경험을 얻었습니다.',

      'TypeScript 및 데이터베이스를 활용한 개인 프로젝트로, 해당 기술에 대한 깊은 학습을 할 수 있었습니다.',
    ],
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'styled-components' },
      { name: 'Node.js' },
      { name: 'MySQL' },
    ],
  },
  {
    number: '03',
    category: 'frontend',
    title: 'personal website',
    images: DRINKABLE_IMAGES,
    description: [],
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'styled-components' },
    ],
    live: process.env.REACT_APP_LIVE_PERSONAL_WEBSITE,
    github: process.env.REACT_APP_GITHUB_PERSONAL_WEBSITE,
  },
  {
    number: '04',
    category: 'fullstack',
    title: 'notification',
    images: DRINKABLE_IMAGES,
    description: [],
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'styled-components' },
      { name: 'Node.js' },
      { name: 'Prisma' },
    ],
    github: process.env.REACT_APP_GITHUB_NOTIFICATION,
  },
];
