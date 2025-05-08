import React, { ReactNode } from 'react';
import styled from 'styled-components';

type InnerContainerProps = {
  children: ReactNode;
};

export default function InnerContainer({ children }: InnerContainerProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 580px) {
    padding: 0 15vw;
  }

  @media (min-width: 581px) and (max-width: 700px) {
    padding: 0 7rem;
  }

  @media (min-width: 701px) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1501px) {
    max-width: 1760px;
  }
`;

const FeaturesInnerContainer = styled(Container)`
  flex-direction: column;

  @media (max-width: 580px) {
    gap: 32px;
  }
`;

const ProfileInnerContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;

  @media (max-width: 580px) {
    margin-top: calc(11.12em + 6em);
  }

  @media (min-width: 581px) {
    margin-top: calc(11.12em + 2em);
  }
`;

const CarriagewayContainer = styled(Container)`
  position: relative;
  justify-content: center;

  @media (min-aspect-ratio: 1440 / 900) {
    margin-top: 4.2rem;
  }

  @media (max-width: 580px) {
    padding: 0 6vw;
  }

  @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
    > div {
      min-height: 40em;
    }
  }

  @media (max-width: 1500px) {
    max-width: unset;
    padding: 0 calc(6em - 2em);
  }

  @media (min-width: 1501px) {
    padding: 0 5em;
  }
`;

const FooterInnerContainer = styled(Container)`
  padding-top: 8rem;
  padding-bottom: 5rem;
  flex-direction: column;

  .footer-main,
  .footer-bottom {
    width: 100%;
    display: flex;
  }
`;

export {
  CarriagewayContainer,
  ProfileInnerContainer,
  FeaturesInnerContainer,
  FooterInnerContainer,
};
