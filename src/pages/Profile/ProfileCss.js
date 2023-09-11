import { style } from '@mui/system';
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

export const ProfilePageHeading = styled.h1`
    background: transparent;
    border: none;
    color: #FFF;
    font-size: 65px;
    letter-spacing: normal;
    line-height: normal;

    @media screen and (max-width: 780px) {
        font-size: 36px;
    }
`;

export const ProfilePageSpan = styled.span`
    color: rgb(0, 214, 70); 
`;
export const ProfilePageParagraph = styled.p`
margin: 0;
color: #FFFFFF;

font-size: ${props => props.fontSize || "65px"};
line-height: ${props => props.lineHeight};
text-align: ${props => props.textAlign};
`;

export const TitleBox = styled.div`
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;
