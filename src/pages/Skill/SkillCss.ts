import styled from 'styled-components'

export const SkillPageSection = styled.section`
height: 700px;
display: grid;
grid-template-rows: min-content;
`;

export const SkillsRow = styled.div`
margin: 0 12%;
display: grid;
grid-template-columns: 100px 1fr 133px;
align-items: center;
justify-items: start;
`;

export const SkillRateParagraph = styled.p`
color: #939DAB;
line-height: 2.8em;
font-size: 14px;
`;

export const SkiilRateBox = styled.div<{ width?: string }>`
height: 12px;
background: #98FB98;

width: ${(props) => props.width};
`;