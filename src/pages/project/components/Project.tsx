import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '@_components/Header/Header';
import Footer from '@_components/Footer/Footer';
import { ProjectContainer } from '@_components/MainContainer';
import ProjectTitle from './components/ProjectTitle';

type ProjectProps = {
  children: ReactNode;
};

export default function Project({ children }: ProjectProps) {
  return (
    <>
      <Header />
      <ProjectContainer>
        <ProjectTitle />
        {children}
      </ProjectContainer>
      <Footer />
    </>
  );
}