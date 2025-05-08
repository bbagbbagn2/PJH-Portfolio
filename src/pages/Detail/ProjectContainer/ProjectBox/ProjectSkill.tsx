import React from 'react';
import styled from 'styled-components';
import { colors } from '@_components/theme';

type ProjectskillProps = {
  project: {
    skill: string[];
  };
};

export default function ProjectSkill({ project }: ProjectskillProps) {
  return (
    <StyledList>
      {project.skill.map((skill, index) => (
        <StyledItem key={index}>{skill}</StyledItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 0 24px 24px;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

const StyledItem = styled.li`
  background-color: ${colors.primary};
  border-radius: 0.3rem;
  color: ${colors.white};
  padding: 0.1rem 0.5rem;
  font-size: 0.6rem;
`;
