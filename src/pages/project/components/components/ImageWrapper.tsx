import React from 'react';
import styled from 'styled-components';
import { ResponsiveImage } from '../../data/projectData';

type ImageWrapperProps = {
  image: ResponsiveImage;
};

export default function ImageWrapper({ image }: ImageWrapperProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1440}
      fetchPriority="high"
      loading="eager"
    />
  );
}

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1440/810;
`;
