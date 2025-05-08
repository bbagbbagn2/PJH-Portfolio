import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from './theme';

type InnerSectionProps = {
  children: ReactNode;
  id?: string;
};

export default function InnerSection({ children, id }: InnerSectionProps) {
  return <Section id={id}>{children}</Section>;
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
    @media (max-height: 1400px) {
      height: 100vh;
    }
  }

  @media (max-height: 1400px) {
    @media (min-width: 701px) {
      min-height: 100vh;
    }
  }
`;

const FeaturesSection = styled(Section)`
  z-index: 3;
  background-color: ${colors.white};

  li a {
    color: currentColor;
  }

  @media (max-width: 580px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    margin-bottom: 0;
  }

  @media (min-width: 581px) and (max-width: 700px) {
    padding-bottom: 0;
  }
`;

const SkillsSection = styled(Section)`
  padding-top: 10rem;
  padding-bottom: 10rem;
  margin-bottom: 0;
`;

const CarriagewaySection = styled(SkillsSection)`
  padding-top: 0;
`;

export { FeaturesSection, SkillsSection, CarriagewaySection };
