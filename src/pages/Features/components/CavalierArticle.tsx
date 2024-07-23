import React from 'react';
import styled from 'styled-components';

import { FeaturesArticle, ArticleWrapper } from '@_components/Article';
import { FeaturesTitle } from '@_components/Title';
import { FeaturesText } from '@_components/Text';
import { colors } from '@_components/theme';
import { Article } from './types/types';

export default function CavalierArticle({
  justifyContent,
  title,
  description,
}: Article) {
  return (
    <StyledContainer
      title={title}
      description={description}
      justifyContent={justifyContent}
    >
      <ArticleWrapper>
        <FeaturesTitle>{title}</FeaturesTitle>
        <FeaturesText>{description}</FeaturesText>
      </ArticleWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled(FeaturesArticle)<Article>`
  justify-content: ${props => props.justifyContent};
  color: ${colors.primary};
`;
