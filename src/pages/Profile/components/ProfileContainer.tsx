import React from 'react';
import styled from 'styled-components';

import { ProfileInnerContainer } from '@_components/InnerContainer';
import { ProfileArticle, ArticleWrapper } from '@_components/Article';

export default function ProfileContainer() {
  return (
    <ProfileInnerContainer>
      <ProfileArticle>
        <ArticleWrapper>
          <Title>
            Frontend
            <br />
            Developer.
          </Title>
          <Description>
            안녕하세요, 어제보다 나은 개발자 박지훈입니다.
          </Description>
        </ArticleWrapper>
      </ProfileArticle>
      <Figure />
    </ProfileInnerContainer>
  );
}

const Title = styled.h1`
  color: #dbf227;
  font-size: 4em;
  line-height: 1.1;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s, opacity 0.2s;

  @media (max-width: 580px) {
    font-size: 5em;
  }

  @media (min-width: 581px) {
    font-size: 4.4em;
  }

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 0.2s;
  }
`;

const Description = styled.p`
  color: #fff;
  line-height: 1.6;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s, opacity 0.2s;

  @media (max-width: 580px) {
    font-size: 2em;
  }

  @media (min-width: 581px) {
    font-size: 1.3em;
  }

  @media (max-width: 700px) {
    max-width: 20em;
  }

  @media (min-width: 701px) {
    width: 32vw;
    max-width: 701px;
    font-size: 1.07em;
    transition-delay: 310ms;
  }
`;

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
