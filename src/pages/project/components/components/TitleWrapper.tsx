import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { projectsData } from '../../data/projectData';
import { formatPathSegment } from '@_utils/helpers';
import PageHeader from '@_components/PageHeader/PageHeader';

export default function TitleWrapper() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.title === id);

  const formattedSegment = project ? formatPathSegment(project.title) : '';

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
    >
      <PageHeader
        title={formattedSegment}
        desc={project?.category + ' Project'}
      />
    </motion.div>
  );
}
