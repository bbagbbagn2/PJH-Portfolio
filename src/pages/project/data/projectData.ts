import {
  ICONDB_IMAGES,
  DRINKABLE_IMAGES,
  PERSONAL_IMAGES,
  NOTIFICATION_IMAGES,
} from '../work-images';

interface Stack {
  name: string;
}

interface Summary {
  name: string;
}

interface Project {
  number?: string;
  category: string;
  date?: string;
  title: string;
  summaries?: Summary[];
  images: string | null;
  background: string[];
  stack: Stack[];
  live?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    number: '01',
    category: 'Frontend',
    date: '2022.03 - 2022.07',
    title: 'icondb',
    images: ICONDB_IMAGES,
    summaries: [
      {
        name: '웹 서비스 개발 전 과정을 경험해보고 싶고, 기존 아이콘 플랫폼의 불편한 UX를 개선하기 위해 개발',
      },
      { name: '최초 웹 개발 경험(HTML, CSS, JS, React)' },
      { name: '최초 협업 경험(Git, Notion)' },
      { name: '프론트엔드 분야에 본격적으로 도전하게 된 계기' },
    ],
    background: [
      '2022년 1학기 재학 중, 3인 팀으로 졸업작품 프로젝트를 진행했습니다. 다양한 아이디어를 제안하고 논의한 끝에, 아이콘 다운로드 시의 불편함을 개선할 수 있는 웹사이트를 개발하기로 결정했습니다. 특히 SVG 확장자의 벡터 기반 특성을 활용하면 색상이나 크기 등을 쉽게 수정할 수 있다는 점에 주목해, 해당 기능을 추가하면 더 좋을 것이라 판단했습니다.',
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
    category: 'Frontend',
    date: '2023.11 - 2024.01',
    title: 'personal-website',
    images: PERSONAL_IMAGES,
    background: [
      `PJH-Portfolio는 웹 포트폴리오입니다. 다양한 템플릿을 이용해 포트폴리오를 만들 수 있지만, 저의 개발 실력을 통해 오로지 '나만 가지고 있는 포트폴리오'를 제작하고 싶었습니다. `,

      'UI 설계와 프론트엔드 개발을 진행했습니다.',

      'React, TypeScript를 사용해 개발을 진행했고, 다양한 custom Hook을 만들고 사용한 경험을 얻었습니다. ',
    ],
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'styled-components' },
    ],
    live: process.env.REACT_APP_LIVE_PERSONAL_WEBSITE,
    github: process.env.REACT_APP_GITHUB_PERSONAL_WEBSITE,
  },
  {
    number: '03',
    category: 'Fullstack',
    date: '2023.06 - 2023.07',
    title: 'notification',
    images: NOTIFICATION_IMAGES,
    background: [],
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'styled-components' },
      { name: 'Prisma' },
    ],
    github: process.env.REACT_APP_GITHUB_NOTIFICATION,
  },
  {
    number: '04',
    category: 'Fullstack',
    date: '2023.03 - 2023.04',
    title: 'drinkable',
    images: null,
    background: [
      'Coming soon.',
      // 'DRINKABLE은 칵테일의 종류에 대한 정보를 제공하는 웹 서비스입니다.',
      // '위 프로젝트는 TypeScript를 적용해보고, MySQL 데이터베이스 설계, Node.js와 같은 백엔드를 학습하기 위해 개발한 개인 프로젝트입니다.',
      // 'TypeScript, Node.js, MySQL을 이용해 프로젝트를 개발하면서 프론트엔드 지식을 향상시키는 동시에 백엔드에 대한 지식을 습득할 수 있었습니다.',
    ],
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'styled-components' },
      { name: 'Node.js' },
      { name: 'MySQL' },
    ],
  },
];
