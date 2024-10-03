# Personal Website

## React를 활용해 개발한 웹 포트폴리오입니다.
<br />

![pjh-Portfolio logo](https://github.com/user-attachments/assets/7b0983f2-ea3a-4ec6-aa7e-31b799091b68)

## 

## Sections
🟣 Introduce<br/>
🟣 About Me<br/>
🟣 Skills<br/>
🟣 Projects<br/>
🟣 Resume<br/>
🟣 E-mail<br/>
🟣 GitHub Profile

To view my portfolio: **[click here](https://pjh-portfolio.netlify.app/)**

## Features
- styled-components를 이용한 스타일 적용
- media-query를 이용한 반응형 제작
- React, TypeScript를 이용한 프론트엔드 개발

## How To Use 🔧
  ```sh
  # Clone the repository
  $ git clone https://github.com/bbagbbagn2/JH-Portfolio.git

  # Install dependencies
  npm install

  # Start a local dev server
  npm start
  ```

![screen1](https://github.com/user-attachments/assets/1fa3af27-8fc7-4fdc-9e16-11d50b3ef7ed)

## Skills used 🛠️
- [React](https://ko.react.dev/) - 컴포넌트 기반의 SPA 구축을 위한 라이브러리
- [TypeScript](https://www.typescriptlang.org/) - JavaScript에 정적 타입을 추가한 프로그래밍 언어
- [styled-components](https://styled-components.com/) - CSS-in-JS 라이브러리
- [Framer Motion](https://www.framer.com/motion/) - 애니메이션 라이브러리
- [CRACO](https://craco.js.org/) - CRA 설정 오버라이드 도구

## Project Architecture
```sh
├── README.md
├── package-lock.json
├── package.json
├── tsconfig.paths.json : tsconfig.json 파일 중 절대경로를 위해 baseUrl, paths를 분리한 파일
├── tsconfig.json
├── craco.config.js
├── .prettierrc
└── src
    ├── assets
    │   └── brand
    │       └── logos
    ├── components
    │   ├── ContactPortal
    │       ├── BasicContact.tsx
    │       └── SocialContact.tsx
    │   ├── CrossSiteNav
    │        └── SocialContact.tsx
    │   ├── NavItem
    │        └── index.tsx
    │   ├── Footer
    │       ├── Footer.tsx
    │       └── Footer.styles.tsx
    │   ├── Header
    │       ├── Header.tsx
    │       └── Header.styles.tsx
    │   ├── PageHeader.tsx
    │   └── theme.ts
    ├── data
    │   └── data.ts
    ├── utils
    │   └── helpers.ts
    ├── pages
    │   ├── Carriageway
    │       └── Carriageway.tsx
    │   ├── Detail
    │       └── Detail.tsx
    │   ├── Features
    │       └── Features.tsx
    │   ├── Main
    │       └── Main.tsx
    │   ├── Profile
    │       └── Profile.tsx
    │   ├── Project
    │       └── Project.tsx
    │   ├── Skills
    │       └── Skills.tsx
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   └── custom.d.ts
    └── public
        ├── favicon.ico
        ├── index.html
        ├── manifest.json
        └── robots.txt
```
