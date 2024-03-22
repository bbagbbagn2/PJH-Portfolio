import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type InnerWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function InnerWrapper({
  children,
  className,
}: InnerWrapperProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  ${props =>
    !props.className?.includes('projectEnv') &&
    css`
      @media (min-width: 701px) {
        transition: transform 0.5s, opacity 0.2s;
      }
    `}
`;

const MainWrapper = styled(Wrapper)`
  margin-bottom: 7.4em;

  @media (min-width: 700px) {
    transition-delay: 300ms;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }

  > ul {
    margin-top: 2.05em;
    font-size: 1.15em;
    line-height: 2.5;
  }
`;

const BottomWrapper = styled(Wrapper)`
  padding-top: 3em;
  justify-content: space-between;
  border-top: 1px solid rgba(186, 221, 118, 0.7);
  font-size: 1.15em;

  @media (max-width: 460px) {
    justify-content: left;
  }

  @media (min-width: 700px) {
    transition-delay: 500ms;
  }
`;

export { MainWrapper, BottomWrapper };
