import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  margin: 0;
  font-weight: 900;
  line-height: 1.1;
  color: #3c8fdd;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.2s, transform 0.5s;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }
`;

const CarriagewayTitle = styled(Heading)`
  font-size: 3.2em;
`;

const FeaturesTitle = styled(Heading)`
  font-size: 4em;
`;

const ProfileTitle = styled(Heading)`
  color: #dbf227;
  font-size: 4em;
  line-height: 1.1;
  
  @media (max-width: 580px) {
    font-size: 5em;
  }

  @media (min-width: 581px) {
    font-size: 4.4em;
  }
`;
export { CarriagewayTitle, FeaturesTitle, ProfileTitle };
