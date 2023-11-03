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

interface SkillsParagraphProps {
    index: number;
}

const getColorByLanguageIndex = (index: number) => {
    const colors = ['#E34F26', '#1572B6', '#F7DF1E', '#3178C6'];

    return colors[index % colors.length];
}

const getColorByFrameworkIndex = (index: number) => {
    const colors = ['#61DAFB', '#FFF', '#339933', '#FFF'];

    return colors[index % colors.length];
}

const getColorByToolIndex = (index: number) => {
    const colors = ['#4479A1', '#FFF', '#FFF', '#5865F2'];

    return colors[index % colors.length];
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
    ];

    const ToolskSkills: ToolsSkills[] = [
        { title: 'MySQL' },
        { title: 'Git & GitHub' },
        { title: 'Notion' },
        { title: 'Discord' },
    ];

    return (
        <PageSection>
            <SkillList>
                <SkillItem>
                    <SkillBox>
                        <CardHeading>LANGUAGE</CardHeading>
                        {LanguageSkills.map((skill, index) => (
                            <SkillsRow key={index}>
                                <LanguageParagraph index={index}>{skill.title}</LanguageParagraph>
                            </SkillsRow>
                        ))}
                    </SkillBox>
                </SkillItem>
                <SkillItem>
                    <SkillBox>
                        <CardHeading>FRAMEWORK</CardHeading>
                        {FramworkSkills.map((skill, index) => (
                            <SkillsRow key={index}>
                                <FrameworkParagraph index={index}>{skill.title}</FrameworkParagraph>
                            </SkillsRow>
                        ))}
                    </SkillBox>
                </SkillItem>
                <SkillItem>
                    <SkillBox>
                        <CardHeading>TOOLS</CardHeading>
                        {ToolskSkills.map((skill, index) => (
                            <SkillsRow key={index}>
                                <ToolParagraph index={index}>{skill.title}</ToolParagraph>
                            </SkillsRow>
                        ))}
                    </SkillBox>
                </SkillItem>
            </SkillList>
        </PageSection>
    );
}


const PageSection = styled.section`
    padding: 0 8%;
    height: 100vh;  
    min-height: 100vh;
    display: flex;
    align-items: center;
`;

const SkillsRow = styled.div`
`;

const SkillList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 6rem;
`;

const SkillItem = styled.li`
    padding: 2rem;
    border: 1px solid transparent;
    border-radius: 20px;
    font-family: black Han Sans;
    letter-spacing: 0.2rem;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.35);
`;

const SkillBox = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
    justify-content: center;
    color: #FFF;
    row-gap: 2rem;
`;

const CardHeading = styled.h1`
    color: #FFF;
    font-size: 1.7rem;
    font-weight: bold;
`;

const SkillsParapragh = styled.p`
    line-height: 2.8em;
    font-size: 20px;
`;

const LanguageParagraph = styled(SkillsParapragh) <SkillsParagraphProps>`
    color: ${props => getColorByLanguageIndex(props.index)};
`;

const FrameworkParagraph = styled(SkillsParapragh) <SkillsParagraphProps>`
    color: ${props => getColorByFrameworkIndex(props.index)};
`;

const ToolParagraph = styled(SkillsParapragh) <SkillsParagraphProps>`

    color: ${props => getColorByToolIndex(props.index)};
`;