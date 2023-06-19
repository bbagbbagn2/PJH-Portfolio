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
        <Container>
                <PortfolioTitle titleNumber="01" titleText="SKILLS" />
            <SkillContainer>
                {skills.map((skill, index) => (
                    <SkillWrapper key={ index }>
                        <SkillTitle>{ skill.title }</SkillTitle>
                        <SkiilRate width={ skill.rate } />
                        <SkillPercent>{ skill.rate }</SkillPercent>
                    </SkillWrapper>
                ))};
            </SkillContainer>
        </Container>
    );
}

const Container = styled.div`
    height: 700px;
    display: grid;
    grid-template-rows: min-content;
`;

const SkillContainer = styled.div`
    display: grid;
`;

const SkillWrapper = styled.div`
    margin: 0 12%;
    display: grid;
    grid-template-columns: 100px 1fr 133px;
    align-items: center;
    justify-items: start;
`;

const SkillTitle = styled.p`
    color: #939DAB;
    line-height: 2.8em;
    font-size: 14px;
`;

const SkiilRate = styled.div<{ width?: string }>`
    height: 12px;
    background: #98FB98;

    width: ${(props) => props.width};
`;

const SkillPercent = styled(SkillTitle)`
    text-align: left;
`;