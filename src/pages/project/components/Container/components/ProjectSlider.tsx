import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

type Image = {
  src: string;
  alt: string;
};

type CustomSliderProps = {
  settings: any;
  images: Image[];
};

export default function CustomSlider({ settings, images }: CustomSliderProps) {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
          <SliderImage key={index} src={image.src} alt={image.alt} />
      ))}
    </Slider>
  );
}

const SliderImage = styled.img`
  height: 100%;
  object-fit: cover;
  list-style: none;
  aspect-ratio: auto 1440/810;
`;
