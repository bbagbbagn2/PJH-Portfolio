import React from 'react';
import styled from 'styled-components';

type Content = {
  id: number;
  text: string;
};

type ContentListProps = {
  contents: Content[];
};

export default function ContentList({ contents }: ContentListProps) {
  return (
    <List>
      {contents.map(content => (
        <li key={content.id}>{content.text}</li>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #dbf227;
  line-height: 1.5;

  li {
    width: calc(50% - 1.731em);
  }

  @media (min-width: 581px) and (max-width: 700px) {
    width: 65%;
  }

  @media (max-width: 700px) {
    font-size: 1.2em;
  }

  @media (min-width: 701px) {
    width: 41%;
    font-size: 0.965em;
  }
`;
