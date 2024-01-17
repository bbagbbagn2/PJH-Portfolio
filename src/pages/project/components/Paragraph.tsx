import React from 'react';
import styled from 'styled-components';

type ParagraphProps = {
  paragraph: string[];
  children?: React.ReactNode;
};
export default function PostContainer({ paragraph }: ParagraphProps) {
  return (
    <Container>
      {paragraph.map((text, index) => (
        <PostParagraph key={index}>{text}</PostParagraph>
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

const PostParagraph = styled.p`
  margin-bottom: 1.25em;
  color: #474747;
  line-height: normal;
`;
