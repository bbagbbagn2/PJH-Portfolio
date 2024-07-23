import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { skillsData } from '../data/skillsData';

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
});

export default function SkillsList() {
  return (
    <SkillsWrapper>
      {skillsData.map(({ component: Icon, color, duration }, index) => (
        <motion.div
          key={index}
          variants={iconVariants(duration)}
          initial="initial"
          animate="animate"
        >
          <SkillBox>
            <Icon fontSize="3.75rem" color={color} />
          </SkillBox>
        </motion.div>
      ))}
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  padding-top: 6rem;
  padding: 0 15vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SkillBox = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: #393e46;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: 580px) {
    margin-bottom: 1.5rem;
  }
`;
