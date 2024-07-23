import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@_components/theme';

/** 주소창에 "-"이 있을 시 띄어쓰기 및 다음 글자를 대문자로 나타내주는 함수 */
function formatPathSegment(segment: string): string {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

export default function TitleWrapper() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastPathSegment = pathSegments[pathSegments.length - 1];
  const formattedSegment = formatPathSegment(lastPathSegment);

  return (
    <StyledHeader>
      <Title>{formattedSegment}</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  margin-top: 1.1em;
  margin-bottom: 3.5rem;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0.67em 0;
  font-size: 1.802em;
  color: ${colors.white};
  user-select: none;
  transition: color 0.6s;
`;
