import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ArticleProps = {
    children: ReactNode;
} 

export default function Article({ children }: ArticleProps) {
  return (
    <ArticleContainer>
      <ArticleWrapper>{children}</ArticleWrapper>
    </ArticleContainer>
  );
}

const ArticleContainer = styled.article`
  position: relative;
`;

const ArticleWrapper = styled.div`
  position: relative;
`;

export { ArticleContainer, ArticleWrapper };