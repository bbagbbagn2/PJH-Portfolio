import React from 'react';
import styled from 'styled-components';

import { colors } from '@_components/theme';

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
  margin: 12px auto 0;
  color: ${colors.white};
  font-size: 32px;
  letter-spacing: 140%;
  user-select: none;

  > span > span {
    opacity: 0.7;
  }
`;
