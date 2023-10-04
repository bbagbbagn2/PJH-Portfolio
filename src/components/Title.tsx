import React from "react";
import styled from 'styled-components';

interface PortfolioTitleProps {
    titleText: string;
}

export default function PortfolioTitle({ titleText }: PortfolioTitleProps): JSX.Element {
    return (
        <TitleLayout>
            <TitleBox>
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

const TitleBox = styled.div`
    color: #FFFFFF;
    line-height: 1.3em;
    font-family: Black Han Sans;
    font-size: 42px;
`;