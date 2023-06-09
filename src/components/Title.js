import React from "react";
import styled from 'styled-components';

export default function PortfolioTitle({ titleNumber, titleText }) {
    return (
        <TitleWrapper>
            <Title>
                <TitleNumber>{titleNumber} </TitleNumber>
                {titleText}
            </Title>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    display: inline-block;
    margin-bottom: 70px;
    display: grid;
    align-items: start;
`;

const Title = styled.div`
    color: #FFFFFF;
    line-height: 1.3em;
    font-family: Black Han Sans;
    font-size: 42px;

    text-align: ${(props) => props.textAlign || "center"};
    color: ${(props) => props.color || "#FFFFFF"};
`;

const TitleNumber = styled.span`
    font-family: Black Han Sans;
    font-size: 50px;
    color: #939DAB;
`;