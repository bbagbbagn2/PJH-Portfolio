import {
  ICONDB_IMAGES,
  DRINKABLE_IMAGES,
  PERSONAL_IMAGES,
  NOTIFICATION_IMAGES,
} from '../work-images';

interface Stack {
  name: string;
}

interface Project {
  number?: string;
  category: string;
  title: string;
  images: string;
  description: string[];
  stack: Stack[];
  live?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    number: '01',
    category: 'Frontend',
    title: 'icondb',
    images: ICONDB_IMAGES,
    description: [
      'ICONDB는 사용자가 아이콘을 무료로 공유할 수 있는 웹 플랫폼입니다. ',

      '이 프로젝트는 기존 아이콘 공유 플랫폼의 장점을 분석하고, 개선점을 반영해 완성되었습니다. 핵심적으로, 사용자 관련 시스템(소셜 로그인, 팔로우, 프로필 변경), 아이콘 관련 기능(다운로드, 업로드, 좋아요), 검색 엔진(제목, 사용자, 해시태그 검색), 그리고 SVG 아이콘 편집 기능을 플랫폼 내에서 구현했습니다. 저는 프론트엔드 개발 뿐만 아니라 프로젝트 기획, 배포까지 전 과정을 진행했습니다. ',

      'UI 설계는 물론 로그인/회원가입, 검색 기능, 아이콘 관리, 프로필 관련 기능을 처음부터 개발했으며, 성능과 안정성을 유지하는 데 집중했습니다. 특히 처음 사용하는 기술이 많았지만, 끊임없이 학습하며 사용자 경험과 시스템 안정성을 최적화했습니다.',

      '초기 개발 환경은 HTML5, CSS3, JavaScript로 구성되어 있었으나, 상태 관리의 어려움과 재사용성 부족으로 중복 코드가 많아 비효율적이었습니다. 이러한 문제를 해결하기 위해 컴포넌트 기반의 React 개발 환경으로 전환했습니다. 이를 통해 중복 코드를 제거하고 효율성을 높였으며, 코드량을 20% 감소시키는 성과를 달성했습니다.',

      'React 도입 과정에서 다양한 Hook의 활용법을 익히고, 컴포넌트화 전략을 통해 유지보수성을 크게 향상시켰습니다. 또한, Notion을 활용한 체계적인 일정 관리와 회의록 기록을 통해 팀원들과의 협업을 강화하고 프로젝트 진행 기간을 10% 단축하는 데 성공했습니다.',

      '이 프로젝트를 통해 React를 기반으로 한 모던 웹 개발 기술과 효율적인 협업 및 일정 관리의 중요성을 심도 있게 이해할 수 있었습니다. ',
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
    title: 'personal-website',
    images: PERSONAL_IMAGES,
    description: [
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
    title: 'notification',
    images: NOTIFICATION_IMAGES,
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
  {
    number: '04',
    category: 'Fullstack',
    title: 'drinkable',
    images: DRINKABLE_IMAGES,
    description: [
      'DRINKABLE은 칵테일의 종류에 대한 정보를 제공하는 웹 서비스입니다.',
      '위 프로젝트는 TypeScript를 적용해보고, MySQL 데이터베이스 설계, Node.js와 같은 백엔드를 학습하기 위해 개발한 개인 프로젝트입니다.',
      'TypeScript, Node.js, MySQL을 이용해 프로젝트를 개발하면서 프론트엔드 지식을 향상시키는 동시에 백엔드에 대한 지식을 습득할 수 있었습니다.',
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
