import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '@_components/Header/Header';
import Footer from '@_components/Footer/Footer';
import Container from './components/Container';
import { projectsData } from './data/projectData';

export default function ProjectPage() {
  const { title } = useParams<{ title: string }>();
  const project = projectsData.find(p => p.title === title);

  if (!project) {
    return <div>Project not found</div>; // 오류 처리
  }

  return (
    <>
      <Header />
      <Container images={project.images} description={project.description} />
      <Footer />
    </>
  );
}
