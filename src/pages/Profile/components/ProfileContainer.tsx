import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

import { ProfileInnerContainer } from '@_components/InnerContainer';
import { ProfileArticle, ArticleWrapper } from '@_components/Article';
import { ProfileTitle } from '@_components/Title';
import { ProfileText } from '@_components/Text';

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

export default function ProfileContainer() {
  return (
    <ProfileInnerContainer>
      <ProfileArticle>
        <ArticleWrapper>
          <motion.div
            variants={container(0)}
            initial="hidden"
            animate="visible">
            <ProfileTitle>
              Frontend
              <br />
              Developer
            </ProfileTitle>
          </motion.div>
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible">
            <ProfileText>
              프론트엔드 주니어 개발자 박지훈입니다.
            </ProfileText>
          </motion.div>
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
