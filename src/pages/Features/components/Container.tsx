import React, { useState, useEffect } from 'react';

import { FeaturesInnerContainer } from '@_components/InnerContainer';
import MotionArticle from './components/MotionArticle';
import { articlesData } from './data/articlesData';
import { Article } from './types/types';

export default function Container() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FeaturesInnerContainer id="features">
      {articlesData.map((article: Article, index) => (
        <MotionArticle
          key={index}
          article={article}
          windowWidth={windowWidth}
          index={index}
        />
      ))}
    </FeaturesInnerContainer>
  );
}
