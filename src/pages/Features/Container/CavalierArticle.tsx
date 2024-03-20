import React from 'react';
import styled from 'styled-components';
import { ArticleContainer, ArticleWrapper } from '@_components/Article';

type CavalierArticleProps = {
  justifyContent?: string;
  title: string;
  description: string;
};

export default function FeaturesArticle({
  justifyContent,
  title,
  description,
}: CavalierArticleProps) {
  return (
    <FeaturesArticleContainer
      justifyContent={justifyContent}
      title={title}
      description={description}
    >
      <ArticleWrapper>
        <CardHeading>{title}</CardHeading>
        <Paragraph>{description}</Paragraph>
      </ArticleWrapper>
    </FeaturesArticleContainer>
  );
}

const FeaturesArticleContainer = styled(ArticleContainer)<CavalierArticleProps>`
  display: flex;

  justify-content: ${props => props.justifyContent};

  @media (max-width: 700px) {
    :not(:last-of-type) {
      margin-bottom: 6vh;
    }
  }

  h1,
  p {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity 0.2s, transform 0.5s;
  }
`;

const CardHeading = styled.h1`
  font-size: 4em;
  font-weight: 900;
  line-height: 1.1;
  color: #3c8fdd;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.2s, transform 0.5s;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #0b2b40;

  @media (max-width: 580px) {
    font-size: 1.3em;
  }

  @media (min-width: 701px) {
    width: 32vw;
    max-width: 701px;
    font-size: 1.07em;
    transition-delay: 310ms;
  }
`;
