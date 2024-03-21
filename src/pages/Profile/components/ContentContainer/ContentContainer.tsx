import React from 'react';
import styled from 'styled-components';
import { ProfileInnerContainer } from '@_components/InnerContainer';
import ContentList from './ContentList/ContentList';

const contentData = [
  {
    id: 1,
    text: 'React 및 Typescript를 사용하여 프로젝트를 개발한 경험이 있습니다.',
  },
  {
    id: 2,
    text: '의사소통의 중요성을 인지하고 있으며 성공적인 개발을 위해 노력합니다.',
  },
];

export default function ContentContainer() {
  return (
    <ContentInnerContainer>
      <ContentList contents={contentData} />
    </ContentInnerContainer>
  );
}

const ContentInnerContainer = styled(ProfileInnerContainer)`
  margin-top: auto;

  @media (max-width: 580px) {
    margin-top: 7em;
    margin-bottom: 4em;
    padding: 0 15vw;
  }

  @media (min-width: 581px) and (max-width: 700px) {
    margin-top: 3.7em;
  }
`;
