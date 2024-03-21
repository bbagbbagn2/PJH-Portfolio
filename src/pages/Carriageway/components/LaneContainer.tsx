import React, { ReactNode } from 'react';
import styled from 'styled-components';

type LaneContainerProps = {
  children: ReactNode;
};
export default function LaneContainer({ children }: LaneContainerProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #f9f9f9;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;