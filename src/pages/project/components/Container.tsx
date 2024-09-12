import React from 'react';

import { ProjectContainer } from '@_components/MainContainer';
import TitleWrapper from './components/TitleWrapper';
import ProjectSlider from './components/SliderWrapper';
import DescriptionWrapper from './components/DescriptionWrapper';
import { settings } from '../config/carouselSettings';

interface Image {
  src: string;
  alt: string;
}

interface ContainerProps {
  images: Image[];
  description: string[];
}

export default function Container({
  images = [],
  description = [],
}: ContainerProps) {
  return (
    <ProjectContainer>
      <TitleWrapper />
      <ProjectSlider settings={settings} images={images} />
      <DescriptionWrapper description={description} />
    </ProjectContainer>
  );
}
