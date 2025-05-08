import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from './theme';

type TextProps = {
  children: ReactNode;
};

export default function Text({ children }: TextProps) {
  return <Paragraph>{children}</Paragraph>;
}

const Paragraph = styled.p`
  color: ${colors.text};
  line-height: 140%;
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition:
    opacity 0.2s,
    trnsform 0.5s;

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
  color: ${colors.background};
  line-height: 140%;

  @media (max-width: 700px) {
    font-size: 14px;
  }

  @media (min-width: 701px) {
    width: 32vw;
    font-size: 1.11056em;
  }
`;

const ProfileText = styled(Paragraph)`
  color: ${colors.white};
  margin: 20px 0;

  @media (max-width: 580px) {
    font-size: 18px;
  }

  @media (min-width: 581px) {
    font-size: 1.3em;
  }

  @media (max-width: 700px) {
    max-width: 20em;
    margin-top: 12px;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    width: 32vw;
    font-size: 1.11056em;
  }
`;

export { CarriagewayText, FeaturesText, ProfileText };
