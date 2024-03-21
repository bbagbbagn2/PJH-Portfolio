import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ParagraphProps = {
  paragraph: string[];
  children?: ReactNode;
};

export default function PostContainer({ paragraph }: ParagraphProps) {
  return (
    <Container>
      {paragraph.map((text, index) => (
        <Paragraph key={index}>{text}</Paragraph>
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
  color: #474747;
  line-height: normal;
`;
