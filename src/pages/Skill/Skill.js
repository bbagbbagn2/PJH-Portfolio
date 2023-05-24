import React from 'react';
import styled from 'styled-components';

export default function Skill() {
    const skills = [
        { title: 'HTML', rate: '75%' },
        { title: 'CSS', rate: '80%' },
        { title: 'JavaScript', rate: '70%' },
        { title: 'React', rate: '80%' },
        { title: 'Git', rate: '75%' },
        { title: 'Node.js', rate: '65%' },
    ];

    return (
        <Container>
            <TitleWrapper>
                <Title>
                    <TitleColor>01 </TitleColor>Introducing the available skills!
                </Title>
                <IntroduceTitle>제 스킬을 소개합니다!</IntroduceTitle>
            </TitleWrapper>
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

const IntroduceTitle = styled.h5`
    margin: 0;
    line-height: 1.8em;
    text-align: center;
    font-size: 24px;
    color: #FFFFFF;
`;

const Container = styled.div`
    height: 700px;
    display: grid;
    grid-template-rows: min-content;
`;

const TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 70px;
`;

const Title = styled.h3`
    color: #FFFFFF;
    line-height: 1.3em;
    text-align: center;
    font-size: 42px;
`;

const TitleColor = styled.span`
    font-size: 42px;
    color: #939DAB;
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

const SkiilRate = styled.div`
    height: 12px;
    background: #98FB98;

    width: ${(props) => props.width};
`;

const SkillPercent = styled(SkillTitle)`
    text-align: left;
`;