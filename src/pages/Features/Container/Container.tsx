import React from 'react';
import styled from 'styled-components';

import { FeaturesInnerContainer } from '@_components/InnerContainer';
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

export default function Container() {
  return (
    <FeaturesInnerContainer>
      {articlesData.map((article, index) => (
        <CavalierArticle
          key={index}
          title={article.title}
          description={article.description}
          justifyContent={article.justifyContent}
        />
      ))}
    </FeaturesInnerContainer>
  );
}