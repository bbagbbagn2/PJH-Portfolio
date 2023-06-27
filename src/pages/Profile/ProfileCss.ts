import styled from 'styled-components';

export const ProfilePageSection = styled.section`
width: 100%;
height: 1088px;
min-height: 1088px;
display: grid;
place-items: center;
place-content: center;
`;

export const ProfilePageBox = styled.div`
display: grid;
width: 100%;
`;

export const ProfilePageParagraph = styled.p<{ fontSize?: string; lineHeight?: string; textAlign?: string; }>`
margin: 0;
color: #FFFFFF;

font-size: ${props => props.fontSize || "65px"};
line-height: ${props => props.lineHeight};
text-align: ${props => props.textAlign};
`;

export const ProfilePageSpan = styled.span`
font-size: 65px;
color: #98FB98;
`;

export const TitleBox = styled.div`
display: inline-block;
margin-bottom: 50px;
`;
