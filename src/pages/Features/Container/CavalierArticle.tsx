import React from 'react';
import styled from 'styled-components';
import { FeaturesArticle, ArticleWrapper } from '@_components/Article';
import { FeaturesTitle } from '@_components/Title';
import { FeaturesText } from '@_components/Text';

type CavalierArticleProps = {
  justifyContent?: string;
  title: string;
  description: string;
};

export default function Article({
  justifyContent,
  title,
  description,
}: CavalierArticleProps) {
  return (
    <Container
      justifyContent={justifyContent}
      title={title}
      description={description}
    >
      <ArticleWrapper>
        <FeaturesTitle>{title}</FeaturesTitle>
        <FeaturesText>{description}</FeaturesText>
      </ArticleWrapper>
    </Container>
  );
}

const Container = styled(FeaturesArticle)<CavalierArticleProps>`
  justify-content: ${props => props.justifyContent};
`;
