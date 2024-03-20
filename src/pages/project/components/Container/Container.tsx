import React, { ReactNode } from 'react';
import styled from 'styled-components';

import ProjectTitle from './components/ProjectTitle';
import Header from '@_components/Header/Header';
import Footer from '@_components/Footer/Footer';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <ProjectTitle />
        {children}
      </MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.main`
  margin: 0 auto;
  padding: 0 3.5rem;
  max-width: 1400px;

  @media (min-width: 651px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    margin-top: calc(3.5rem * 1.2);
  }
`;