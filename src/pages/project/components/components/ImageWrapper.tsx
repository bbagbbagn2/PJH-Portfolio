import React from 'react';
import styled from 'styled-components';

type ImageWrapperProps = {
  src: string;
  alt: string;
};

export default function ImageWrapper({ src, alt }: ImageWrapperProps) {
  return <Image src={src} alt={alt} />;
}

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  list-style: none;
  aspect-ratio: auto 1440/810;
`;