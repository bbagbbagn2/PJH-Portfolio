import React from 'react';
import styled from 'styled-components'

import PortfolioTitle from '../../components/Title.tsx';

interface LanguageSkills {
    title: string;
}

interface FrameworkSkills {
    title: string;
}

interface ToolsSkills {
    title: string;
}

export default function App(): JSX.Element {
    const LanguageSkills: LanguageSkills[] = [
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'JavaScript' },
        { title: 'TypeScript' },
    ];

    const FramworkSkills: FrameworkSkills[] = [
        { title: 'React' },
        { title: 'Next.js' },
        { title: 'Node.js' },
        { title: 'prisma' },
    ]

    const ToolskSkills: ToolsSkills[] = [
        { title: 'MySQL' },
        { title: 'Git & GitHub' },
        { title: 'Notion' },
        { title: 'Discord' },
    ]


    return (
        <SkillPageSection>
            <PortfolioTitle titleText="MY SKILLS" />
            <SkillList>
                <SkillItem>
                    <SkillBox>
                        <CardHeading>LANGUAGE</CardHeading>
                        {LanguageSkills.map((skill, index) => (
                            <SkillsRow key={index}>
                                <SkillRateParagraph>{skill.title}</SkillRateParagraph>
                            </SkillsRow>
                        ))}
                    </SkillBox>
                </SkillItem>
                <SkillItem>
                    <SkillBox>
                        <CardHeading>FRAMEWORK</CardHeading>
                        {FramworkSkills.map((skill, index) => (
                            <SkillsRow key={index}>
                                <SkillRateParagraph>{skill.title}</SkillRateParagraph>
                            </SkillsRow>
                        ))}
                    </SkillBox>
                </SkillItem>
                <SkillItem>
                    <SkillBox>
                        <CardHeading>TOOLS</CardHeading>
                        {ToolskSkills.map((skill, index) => (
                            <SkillsRow key={index}>
                                <SkillRateParagraph>{skill.title}</SkillRateParagraph>
                            </SkillsRow>
                        ))}
                    </SkillBox>
                </SkillItem>
            </SkillList>
        </SkillPageSection>
    );
}


const SkillPageSection = styled.section`
    padding: 0 8%;
    margin-bottom: 300px;
`;

const SkillsRow = styled.div`
`;

const SkillRateParagraph = styled.p`
    color: #FFF;
    line-height: 2.8em;
    font-size: 20px;
`;


const SkillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
`;
const SkillItem = styled.li`
    padding: 20px;  
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.35);
    border: 1px solid transparent;
    border-radius: 20px;
    font-family: black Han Sans;
    letter-spacing: 0.2rem;
    gap: 30px;
    transition: all 0.3s ease;

    &:hover {
        border-color: #FFF;
        box-shadow: none;
    }
`;

const SkillBox = styled.div`
    min-width: 380px;
    height: 100%;
    display: grid;
    place-items: center;
    gap: 30px;
    color: #FFF;
`;

const CardHeading = styled.h1`
    margin-bottom: 20px;
    color: #FFF;
    font-size: 1.7rem;
    font-weight: bold;
`;
