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
  background-color: #393e46;
  border-radius: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;