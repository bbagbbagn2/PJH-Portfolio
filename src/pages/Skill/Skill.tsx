import React from 'react';
import PortfolioTitle from '../../components/Title.tsx';
import * as S from './SkillCss.ts';

interface Skills {
    title: string;
    rate: string;
}

export default function App(): JSX.Element {
    const skills: Skills[] = [
        { title: 'HTML', rate: '75%' },
        { title: 'CSS', rate: '80%' },
        { title: 'JavaScript', rate: '70%' },
        { title: 'React', rate: '80%' },
        { title: 'Git', rate: '75%' },
        { title: 'Node.js', rate: '65%' },
    ];

    return (
        <S.SkillPageSection>
            <PortfolioTitle titleNumber="01" titleText="SKILLS" />
            <S.SkillsBox>
                {skills.map((skill, index) => (
                    <S.SkillsRow key={index}>
                        <S.SkillRateParagraph>{skill.title}</S.SkillRateParagraph>
                        <S.SkiilRateBox width={skill.rate} />
                        <S.SkillRateParagraph>{skill.rate}</S.SkillRateParagraph>
                    </S.SkillsRow>
                ))};
            </S.SkillsBox>
        </S.SkillPageSection>
    );
}