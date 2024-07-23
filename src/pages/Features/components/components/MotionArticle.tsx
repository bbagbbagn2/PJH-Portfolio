import React from 'react';
import { motion } from 'framer-motion';
import FeaturesArticle from '../CavalierArticle';
import { Article } from '../types/types';

interface MotionArticleProps {
  article: Article;
  windowWidth: number;
  index: number;
}

export default function MotionArticle({
  article,
  windowWidth,
  index,
}: MotionArticleProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      initial={{
        opacity: 0,
        x: windowWidth > 580 ? (index % 2 === 0 ? -100 : 100) : 0,
        y: windowWidth <= 580 ? -100 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <FeaturesArticle
        title={article.title}
        description={article.description}
        justifyContent={article.justifyContent}
      />
    </motion.div>
  );
}
