import React from 'react';
import styled from 'styled-components';

export default function Skill() {
    return (
        <Container>
            <TitleWrapper>
                <Title>
                    <TitleColor>01 </TitleColor>
                    Introducing the available skills!
                </Title>
                <IntroduceTitle>제 스킬을 소개합니다!</IntroduceTitle>
            </TitleWrapper>
            <Part1SkillContainer>
                <SkillWrapper>
                    <SkillTitle>HTML</SkillTitle>
                    <SkiilRate width="40vw" />
                    <SkillPercent>75%</SkillPercent>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillTitle>CSS</SkillTitle>
                    <SkiilRate width="45vw" />
                    <SkillPercent>80%</SkillPercent>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillTitle>JavaScript</SkillTitle>
                    <SkiilRate width="35vw" />
                    <SkillPercent>70%</SkillPercent>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillTitle>React</SkillTitle>
                    <SkiilRate width="45vw" />
                    <SkillPercent>80%</SkillPercent>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillTitle>git</SkillTitle>
                    <SkiilRate width="40vw" />
                    <SkillPercent>75%</SkillPercent>
                </SkillWrapper>
                <SkillWrapper>
                    <SkillTitle>Node.js</SkillTitle>
                    <SkiilRate width="30vw" />
                    <SkillPercent>65%</SkillPercent>
                </SkillWrapper>
            </Part1SkillContainer>
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

const Part1SkillContainer = styled.div`
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