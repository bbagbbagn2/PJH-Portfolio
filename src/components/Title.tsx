import React from "react";
import styled from 'styled-components';

interface PortfolioTitleProps {
    titleNumber: number;
    titleText: string;
}

export default function PortfolioTitle({ titleNumber, titleText }: PortfolioTitleProps): JSX.Element {
    return (
        <TitleLayout>
            <TitleBox>
                <TitleSpan>{titleNumber} </TitleSpan>
                {titleText}
            </TitleBox>
        </TitleLayout>
    )
}

const TitleLayout = styled.div`
    display: inline-block;
    margin-bottom: 70px;
    display: grid;
    align-items: start;
`;

const TitleBox = styled.div<{ textAlign?: string; color?: string; }>`
    color: #FFFFFF;
    line-height: 1.3em;
    font-family: Black Han Sans;
    font-size: 42px;

    text-align: ${props => props.textAlign || "center"};
    color: ${props => props.color || "#FFFFFF"};
`;

const TitleSpan = styled.span`
    font-family: Black Han Sans;
    font-size: 50px;
    color: #939DAB;
`;