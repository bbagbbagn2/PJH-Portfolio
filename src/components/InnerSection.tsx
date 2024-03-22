import React, { ReactNode } from 'react';
import styled from 'styled-components';

type InnerSectionProps = {
  children: ReactNode;
}

export default function InnerSection({ children }: InnerSectionProps) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: auto;

  @media (max-width: 580px) {
    margin-bottom: 10rem;
  }

  @media (min-width: 581px) and (max-width: 700px) {
    padding: 15vh 0;
  }

  @media (min-width: 701px) {
    @media (max-height: 1199px) {
      height: 100vh;
    }
  }

  @media (max-height: 1199px) {
    @media (min-width: 701px) {
      min-height: 100vh;
    }
  }
`;

const FeaturesSection = styled(Section)`
  z-index: 3;

  li a {
    color: currentColor;
  }

  @media (min-width: 581px) and (max-width: 700px) {
    padding-bottom: 0;
  }
`;

export { FeaturesSection };