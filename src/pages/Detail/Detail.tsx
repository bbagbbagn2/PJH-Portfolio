import React from 'react';
import styled from 'styled-components';
import Header from '@_components/Header/Header';
import Footer from '@_components/Footer/Footer';
import PageHeader from '@_components/PageHeader/PageHeader';
import ProjectList from './ProjectContainer/ProjectList';

export default function Detail() {
  return (
    <>
      <Header />
      <MainContainer>
        <PageHeader title="project" desc="팀 & 개인 프로젝트 리스트." />
        <ProjectList />
      </MainContainer>
      <Footer />
    </>
  );
}
const MainContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 3.5rem;

  @media (max-width: 650px) {
    margin-top: 0;
    padding-left: 8.9vw;
    padding-right: 8.9vw;
  }

  @media (min-width: 651px) {
    font-size: 0.9em;
  }

  @media (min-width: 1024px) {
    margin-top: calc(3.5rem * 1.2);
  }

  .visuallyhidden {
    margin: -1px;
    padding: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
  }
`;
