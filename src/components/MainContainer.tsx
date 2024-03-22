import React, { ReactNode } from 'react';
import styled from 'styled-components';

type MainContainerProps = {
  children: ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  margin: 0 auto;
  padding: 0 3.5rem;

  @media (min-width: 1024px) {
    margin-top: calc(3.5rem * 1.2);
  }
`;

const DetailContainer = styled(Container)`
  max-width: 1280px;

  @media (max-width: 650px) {
    padding-left: 8.9vw;
    padding-right: 8.9vw;
  }

  @media (min-width: 651px) {
    font-size: 0.9em;
  }

  .visuallyhidden {
    margin: -1px;
    padding: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
  }
`;

const ProjectContainer = styled(Container)`
  max-width: 1400px;

  @media (min-width: 651px) {
    font-size: 18px;
  }
`;

export { DetailContainer, ProjectContainer };
