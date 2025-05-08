import React from 'react';
import styled from 'styled-components';

import { ProfileInnerContainer } from '@_components/InnerContainer';
import { ProfileArticle, ArticleWrapper } from '@_components/Article';
import { ProfileTitle } from '@_components/Title';
import { ProfileText } from '@_components/Text';
import MotionWrapper from './components/MotionWrapper';

export default function ProfileContainer() {
  return (
    <ProfileInnerContainer>
      <ProfileArticle>
        <ArticleWrapper>
          <MotionWrapper delay={0}>
            <ProfileTitle>
              Frontend
              <br />
              Developer
            </ProfileTitle>
          </MotionWrapper>
          <MotionWrapper delay={0.5}>
            <ProfileText>프론트엔드 개발자 박지훈입니다.</ProfileText>
          </MotionWrapper>
        </ArticleWrapper>
      </ProfileArticle>
      <MotionWrapper x={100} delay={1.2}>
        <StyledFigure />
      </MotionWrapper>
    </ProfileInnerContainer>
  );
}

const StyledFigure = styled.figure`
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
