import React from 'react';
import Header from '@_components/Header/Header';
import Footer from '@_components/Footer/Footer';
import { DetailContainer } from '@_components/MainContainer';
import PageHeader from '@_components/PageHeader/PageHeader';
import ProjectList from './ProjectContainer/ProjectList';

export default function Detail() {
  return (
    <>
      <Header />
      <DetailContainer>
        <PageHeader title="project" desc="팀 & 개인 프로젝트 리스트." />
        <ProjectList />
      </DetailContainer>
      <Footer />
    </>
  );
}
