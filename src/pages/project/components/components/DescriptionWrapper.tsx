import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@_components/theme';

interface DescriptionWrapperProps {
  features?: { name: string }[];
  description: string[];
  children?: ReactNode;
}

export default function DescriptionWrapper({
  description,
  features,
}: DescriptionWrapperProps) {
  return (
    <Container>
      <SubTitle>핵심 기능</SubTitle>
      {features && features.length > 0 && (
        <ul>
          {features.map((features, index) => (
            <li key={index}>{features.name}</li>
          ))}
        </ul>
      )}
      {/* {description.map((desc, index) => (
        <Paragraph key={index}>{desc}</Paragraph>
      ))} */}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 3em;
  position: relative;
  max-width: 940px;

  ul > li {
    font-size: 24px;
  }
`;

const SubTitle = styled.h2`
  padding-bottom: 40px;
  font-size: 56px;
  line-height: 1.1786514286;
  letter-spacing: 0;
  font-weight: 500;
`;

const Paragraph = styled.p`
  margin-bottom: 1.25em;
  color: ${colors.text};
`;
