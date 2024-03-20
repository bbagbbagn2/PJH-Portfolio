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

export { ProfileInnerContainer, FeaturesInnerContainer, FooterInnerContainer };