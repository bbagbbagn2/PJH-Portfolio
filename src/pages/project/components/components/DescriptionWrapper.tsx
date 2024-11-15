import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@_components/theme';

interface DescriptionWrapperProps {
  description: string[];
  children?: ReactNode;
}

export default function DescriptionWrapper({
  description,
}: DescriptionWrapperProps) {
  return (
    <Container>
      {description.map((desc, index) => (
        <Paragraph key={index}>{desc}</Paragraph>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 3em;
  position: relative;
  max-width: 940px;
`;

const Paragraph = styled.p`
  margin-bottom: 1.25em;
  color: ${colors.text};
`;
