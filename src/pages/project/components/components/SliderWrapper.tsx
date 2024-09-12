import React from 'react';
import styled from 'styled-components';

type SliderWrapperProps = {
  images: string;
};

export default function SliderWrapper({ images }: SliderWrapperProps) {
  return <Image src={images} />;
}

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  list-style: none;
  aspect-ratio: auto 1440/810;
`;
