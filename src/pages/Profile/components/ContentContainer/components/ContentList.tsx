import React from 'react';
import styled from 'styled-components';

import MotionWrapper from '../../components/MotionWrapper';
import { colors } from '@_components/theme';
import { Content } from '../types/types';

interface ContentListProps {
  contents: Content[];
}

export default function ContentList({ contents }: ContentListProps) {
  return (
    <StyledList>
      {contents.map((content) => (
        <li key={content.id}>
          <MotionWrapper key={content.id} delay={content.id * 0.3}>
            {content.text}
          </MotionWrapper>
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  color: ${colors.text};
  line-height: 140%;

  li {
    width: calc(50% - 1.731em);
  }

  @media (min-width: 581px) and (max-width: 700px) {
    width: 65%;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }

  @media (min-width: 701px) {
    width: 41%;
    font-size: 1.11056em;
  }
`;
