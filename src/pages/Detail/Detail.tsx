import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <PageHeader title="project" desc="Team & Personal Projects" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <ProjectList />
        </motion.div>

      </DetailContainer>

      <Footer />
    </>
  );
}
