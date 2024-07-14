import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '@_components/theme';

type Content = {
  id: number;
  text: string;
};

type ContentListProps = {
  contents: Content[];
};

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function ContentList({ contents }: ContentListProps) {
  return (
    <List>
      {contents.map(content => (
        <li key={content.id}>
          <motion.div
            key={content.id}
            variants={container(content.id * 0.5)}
            initial="hidden"
            animate="visible"
          >
            {content.text}
          </motion.div>
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  color: ${colors.text};
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
