import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TextProps = {
  children: ReactNode;
};

export default function Text({ children }: TextProps) {
  return <Paragraph>{children}</Paragraph>;
}

const Paragraph = styled.p`
  color: #0b2b40;
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition: opacity 0.2s, trnsform 0.5s;

  @media (min-width: 701px) {
    max-width: 701px;
    transition-delay: 310ms;
  }
`;

const CarriagewayText = styled(Paragraph)`
  width: unset;
  font-size: 1.6em;
`;

const FeaturesText = styled(Paragraph)`
  font-size: 1em;
  line-height: 1.6;

  @media (max-width: 580px) {
    font-size: 1.3em;
  }

  @media (min-width: 701px) {
    width: 32vw;
    font-size: 1.07em;
  }
`;

export { CarriagewayText, FeaturesText };