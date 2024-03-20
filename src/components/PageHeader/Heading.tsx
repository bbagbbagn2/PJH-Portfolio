import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  title?: string;
  noDot?: string;
  hideDecor?: boolean;
  preTitleSymbol?: string;
};

export default function Heading({
  title,
  noDot,
  hideDecor,
  preTitleSymbol = '/',
}: HeadingProps) {
  return (
    <>
      {title && (
        <Title aria-label={`${title}.`}>
          <span>
            {!hideDecor && <span>{preTitleSymbol}</span>}
            {title}
            {!noDot && !hideDecor && <span>.</span>}
          </span>
        </Title>
      )}
    </>
  );
}
const Title = styled.h1`
  user-select: none;
  font-size: 1.802em;

  @media (max-width: 650px) {
    display: none;
  }
  > span > span {
    opacity: 0.7;
  }
`;
