import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

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

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

export default function ContentContainer() {
  return (
    <Container>
      <motion.div
        variants={container(1)}
        initial="hidden"
        animate="visible">
        <ContentList contents={contentData} />
      </motion.div>
    </Container>
  );
}

const Container = styled(ProfileInnerContainer)`
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
