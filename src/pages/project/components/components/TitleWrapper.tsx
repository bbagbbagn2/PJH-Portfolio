import React from 'react';
import { motion } from 'framer-motion';

import PageHeader from '@_components/PageHeader/PageHeader';

interface TitleProps {
  title: string;
  desc: string;
}

export default function TitleWrapper({ title, desc }: TitleProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
    >
      <PageHeader title={title} desc={desc} />
    </motion.div>
  );
}
