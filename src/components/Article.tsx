import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ArticleProps = {
  children: ReactNode;
};

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

const CarriagewayArticle = styled(ArticleContainer)`
  margin-bottom: 4.5em;
`;

const FeaturesArticle = styled(ArticleContainer)`
  display: flex;

  @media (max-width: 700px) {
    :not(:last-of-type) {
      margin-bottom: 6vh;
    }
  }
`;

const ProfileArticle = styled(ArticleContainer)`
  @media (min-width: 701px) {
    margin-top: -3.5em;
  }
`;

export { ArticleContainer, ArticleWrapper, CarriagewayArticle, FeaturesArticle, ProfileArticle };
