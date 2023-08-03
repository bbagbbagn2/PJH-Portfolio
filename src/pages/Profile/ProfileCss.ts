import styled from 'styled-components';

export const ProfilePageSection = styled.section`
height: 1088px;
min-height: 1088px;
display: grid;
place-items: center;
place-content: center;
`;

export const ProfilePageBox = styled.div`
display: grid;
`;

export const ProfilePageParagraph = styled.p<{ fontSize?: string; lineHeight?: string; textAlign?: string; }>`
margin: 0;
color: #FFFFFF;

font-size: ${props => props.fontSize || "65px"};
line-height: ${props => props.lineHeight};
text-align: ${props => props.textAlign};
`;

export const TitleBox = styled.div`
display: inline-block;
margin-bottom: 50px;
`;
