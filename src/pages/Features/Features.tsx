import React from 'react';
import styled from 'styled-components';

import Container from './Container/Container';

export default function Features() {
  return (
    <Section>
      <Container />
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: auto;
  z-index: 3;

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

  li a {
    color: currentColor;
  }
`;