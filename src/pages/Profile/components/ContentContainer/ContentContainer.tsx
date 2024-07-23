import React from 'react';
import styled from 'styled-components';

import { ProfileInnerContainer } from '@_components/InnerContainer';
import ContentList from './components/ContentList';
import { contentData } from './data/contentData';
import MotionWrapper from '../components/MotionWrapper';

export default function ContentContainer() {
  return (
    <Container>
      <MotionWrapper delay={1}>
        <ContentList contents={contentData} />
      </MotionWrapper>
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
