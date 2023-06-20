import React from 'react';
import styled from 'styled-components';
import PortfolioTitle from '../../components/Title.tsx';

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
        <SkillPageSection>
                <PortfolioTitle titleNumber="01" titleText="SKILLS" />
            <div>
                {skills.map((skill, index) => (
                    <SkillsRow key={ index }>
                        <SkillRateParagraph>{ skill.title }</SkillRateParagraph>
                        <SkiilRateBox width={ skill.rate } />
                        <SkillRateParagraph>{ skill.rate }</SkillRateParagraph>
                    </SkillsRow>
                ))};
            </div>
        </SkillPageSection>
    );
}

const SkillPageSection = styled.section`
    height: 700px;
    display: grid;
    grid-template-rows: min-content;
`;

const SkillsRow = styled.div`
    margin: 0 12%;
    display: grid;
    grid-template-columns: 100px 1fr 133px;
    align-items: center;
    justify-items: start;
`;

const SkillRateParagraph = styled.p`
    color: #939DAB;
    line-height: 2.8em;
    font-size: 14px;
`;

const SkiilRateBox = styled.div<{ width?: string }>`
    height: 12px;
    background: #98FB98;

    width: ${(props) => props.width};
`;