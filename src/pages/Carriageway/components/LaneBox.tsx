import React, { ReactNode } from 'react';
import styled from 'styled-components';

type LaneBoxProps = {
  children: ReactNode;
};

export default function LaneBox({ children }: LaneBoxProps) {
  return <Box>{children}</Box>;
}

const Box = styled.div`
  padding: 6.95em;
  padding-left: 6em;
  border: none;

  :not(:last-of-type) {
    border-style: solid;
    border-width: 0 0 0.15rem 0;
    border-color: rgba(188, 111, 241, 0.3);
  }

  @media (min-width: 581px) {
    width: 50%;

    :not(:last-of-type) {
      border-bottom-width: 0;
      border-right-width: 0.15rem;
    }
  }

  @media (min-width: 581px) and (max-width: 700px) {
    padding-left: 4.5em;
    padding-right: 4.5em;
  }
`;