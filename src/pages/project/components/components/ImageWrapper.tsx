import React from 'react';
import styled from 'styled-components';

type ImageWrapperProps = {
  src: string;
  alt: string;
};

export default function ImageWrapper({ src, alt }: ImageWrapperProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fetchPriority="high"
      loading="eager"
      width={1440}
      height={810}
    />
  );
}

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  list-style: none;
  aspect-ratio: auto 1440/810;
`;
