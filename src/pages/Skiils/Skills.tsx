import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import InnerSection from '@_components/InnerSection';
import PageHeader from '@_components/PageHeader/PageHeader';
import { RiReactjsLine, RiJavascriptLine, RiNextjsLine } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoNodejs } from 'react-icons/bi';
import {
  SiMysql,
  SiStyledcomponents,
  SiAxios,
  SiPrisma,
  SiGithub,
  SiNotion,
} from 'react-icons/si';

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
  { component: RiJavascriptLine, color: '#F7DF1E', duration: 2.5 },
  { component: BiLogoTypescript, color: '#3178C6', duration: 3 },
  { component: RiReactjsLine, color: '#61DAFB', duration: 5 },
  { component: RiNextjsLine, color: '#000000', duration: 2 },
  { component: SiStyledcomponents, color: '#DB7093', duration: 6 },
  { component: SiAxios, color: '#5A29E4', duration: 4 },
  { component: BiLogoNodejs, color: '#5FA04E', duration: 5.5 },
  { component: SiPrisma, color: '#2D3748', duration: 3.5 },
  { component: SiMysql, color: '#4479A1', duration: 4.5 },
  { component: SiGithub, color: '#181717', duration: 2.5 },
  { component: SiNotion, color: '#000000', duration: 5 },
];

export default function Skills() {
  return (
    <InnerSection>
      <div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          <PageHeader title="Skills" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
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
    </InnerSection>
  );
}

const SkillsWrapper = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SkillBox = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  border: 4px solid rgb(38 38 38);
`;
