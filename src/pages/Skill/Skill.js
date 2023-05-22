import React from 'react';
import styled from 'styled-components';

export default function Main() {
    return (
        <Part1Container>
            <Part1TitleWrapper>
                <Part1Title>
                    <Part1TitleColor>01 </Part1TitleColor>
                    Introducing the available skills!
                </Part1Title>
                <IntroduceTitle>스킬을 확인하세요.</IntroduceTitle>
            </Part1TitleWrapper>
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
                    <SkillTitle>Javascript</SkillTitle>
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
            </Part1SkillContainer>
        </Part1Container>
    );
}

const IntroduceTitle = styled.h5`
    margin: 0;
    line-height: 1.8em;
    text-align: center;
    font-size: 24px;
    color: #FFFFFF;
`;

const Part1Container = styled.div`
    height: 1250px;
    display: grid;
    grid-template-rows: repeat(2, min-content) 1fr;
`;

const Part1TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 70px;
`;

const Part1Title = styled.h3`
    color: #FFFFFF;
    line-height: 1.3em;
    text-align: center;
    font-size: 42px;
`;

const Part1TitleColor = styled.span`
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