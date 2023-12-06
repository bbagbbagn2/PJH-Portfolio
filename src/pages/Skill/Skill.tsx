import React from 'react';
import styled from 'styled-components';

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

export default function Skill() {
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
        <SkillPageSection>
            <InnerContentBox>

            </InnerContentBox>
        </SkillPageSection>
    );
}

const SkillPageSection = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #3c8fdd;

    @media (max-width: 580px) {
        margin-bottom: 10rem;
    }
`;

const InnerContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 580px) {
        margin-top: 7.12em;
        padding: 0 15vw;
    }

    @media (max-width: 700px) {
        flex-direction: column;
    }

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