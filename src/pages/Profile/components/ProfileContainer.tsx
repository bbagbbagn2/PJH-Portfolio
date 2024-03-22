import React from 'react';
import styled from 'styled-components';

import { ProfileInnerContainer } from '@_components/InnerContainer';
import { ProfileArticle, ArticleWrapper } from '@_components/Article';
import { ProfileTitle } from '@_components/Title';
import { ProfileText } from '@_components/Text';

export default function ProfileContainer() {
  return (
    <ProfileInnerContainer>
      <ProfileArticle>
        <ArticleWrapper>
          <ProfileTitle>
            Frontend
            <br />
            Developer.
          </ProfileTitle>
          <ProfileText>
            안녕하세요! 어제보다 나아지는 개발자 박지훈입니다.
          </ProfileText>
        </ArticleWrapper>
      </ProfileArticle>
      <Figure />
    </ProfileInnerContainer>
  );
}

const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: 23.2334em;
  height: 24.67em;
  border: 0.115rem solid #fff;
  z-index: 1;

  @media (max-width: 580px) {
    display: none;
  }

  @media (max-width: 700px) {
    margin-right: 0;
  }

  @media (min-width: 701px) {
    margin-right: calc(6em + 4em);
  }
`;
