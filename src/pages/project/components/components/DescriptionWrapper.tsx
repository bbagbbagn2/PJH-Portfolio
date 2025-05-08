import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@_components/theme';

interface Stack {
  name: string;
}

interface Summaries {
  name: string;
}

interface DescriptionWrapperProps {
  summaries?: Summaries[];
  features?: string[];
  background: string[];
  stack?: Stack[];
  children?: ReactNode;
}

export default function DescriptionWrapper({
  summaries,
  features,
  background,
  stack,
}: DescriptionWrapperProps) {
  return (
    <Container>
      <SubTitle isFirst>요약</SubTitle>
      <StyledList isFirst>
        {summaries &&
          summaries.length > 0 &&
          summaries.map((item, index) => <li key={index}>{item.name}</li>)}
      </StyledList>
      {features && features.length > 0 && (
        <Paragraph isCaption="0.7">{features[0]}</Paragraph>
      )}

      <SubTitle>개발 배경</SubTitle>
      {background.map((text, index) => (
        <Paragraph key={index}>{text}</Paragraph>
      ))}

      <SubTitle>사용 기술</SubTitle>
      {stack && stack.length > 0 && (
        <Paragraph>{stack.map((tech) => tech.name).join(', ')}</Paragraph>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 3em;
  position: relative;
  max-width: 940px;
  font-size: 16px;
  line-height: 1.4;
`;

const StyledList = styled.ul<{ isFirst?: boolean }>`
  list-style: disc;
  color: ${colors.white};

  margin-bottom: ${({ isFirst }) => (isFirst ? '16px' : '0')};

  > li {
    margin-left: 24px;
    list-style: disc;
  }
`;

const SubTitle = styled.h2<{ isFirst?: boolean }>`
  margin-bottom: 16px;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 700;

  padding-top: ${({ isFirst }) => (isFirst ? '0' : '32px')};
`;

const Paragraph = styled.p<{ isCaption?: string }>`
  margin: 0;
  color: ${colors.white};

  opacity: ${({ isCaption }) => (isCaption ? '0.7' : '1')};
`;
