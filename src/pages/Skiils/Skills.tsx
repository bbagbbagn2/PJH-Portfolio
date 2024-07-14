import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SkillsSection } from '@_components/InnerSection';
import PageHeader from '@_components/PageHeader/PageHeader';
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoNodejs } from 'react-icons/bi';
import { SiMysql, SiPrisma } from 'react-icons/si';

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

const skillsData = [
  { component: BiLogoTypescript, color: '#3178C6', duration: 3 },
  { component: RiReactjsLine, color: '#61DAFB', duration: 5 },
  { component: TbBrandNextjs, color: '#000000', duration: 2 },
  { component: BiLogoNodejs, color: '#5FA04E', duration: 5.5 },
  { component: SiPrisma, color: '#2D3748', duration: 6 },
  { component: SiMysql, color: '#4479A1', duration: 4.5 },
];

export default function Skills() {

  return (
    <SkillsSection>
      <div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          <PageHeader title="Skills" />
        </motion.div>
        <motion.div
          whileInView={{opacity: 1, x: 0 }}
          initial={{opacity: 0, x: -100}}
          transition={{ duration: 1.5 }}
        >
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
        </motion.div>
      </div>
    </SkillsSection>
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: 580px) {
    margin-bottom: 1.5rem;
    padding-bottom: 0;
  }
`;
