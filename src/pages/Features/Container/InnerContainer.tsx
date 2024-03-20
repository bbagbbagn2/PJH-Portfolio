import React from 'react';
import styled from 'styled-components';

import CavalierArticle from './CavalierArticle';

const articlesData = [
  {
    title: 'Possibility',
    description:
      '저는 빠르게 변화하는 프론트엔드 기술 환경에 대한 유연성을 갖추고 있습니다. 개인 프로젝트 및 팀 프로젝트를 통해 적용 가능한 기술과 노력을 통해 기여할 가능성을 높이고 있는 것에 최선을 다 하고 있습니다.',
  },
  {
    title: 'Refactoring;',
    description:
      '저는 빠르게 변화하는 프론트엔드 기술 환경에 대한 유연성을 갖추고 있습니다. 개인 프로젝트 및 팀 프로젝트를 통해 적용 가능한 기술과 노력을 통해 기여할 가능성을 높이고 있는 것에 최선을 다 하고 있습니다.',
    justifyContent: 'flex-end',
  },
];

export default function InnerContainer() {
  return (
    <Container>
      {articlesData.map((article, index) => (
        <CavalierArticle
          key={index}
          title={article.title}
          description={article.description}
          justifyContent={article.justifyContent}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 580px) {
    padding: 0 15vw;
  }

  @media (min-width: 581px) and (max-width: 700px) {
    padding: 0 7rem;
  }

  @media (min-width: 701px) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1501px) {
    max-width: 1760px;
  }
`;
