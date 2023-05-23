import React from 'react';
import styled from 'styled-components';
import IconDB_Logo from '../../assets/images/IconDB_Logo.svg';
import DRINKABLE_Logo from '../../assets/images/DRINKABLE_Logo.svg';

export default function Work() {
    return (
        <Container>
            <TitleWrapper>
                <Title>
                    <TitleColor>02 </TitleColor>PORTFOLIO
                </Title>
            </TitleWrapper>
            <WorkContainer>
                <WorkWrapper>
                    <ItemWrapper>
                        <WorkItems src={IconDB_Logo} />
                        <ItemCaption />
                    </ItemWrapper>
                    <ItemWrapper>
                        <WorkItems background="#EDEAE3" src={DRINKABLE_Logo} />
                        <ItemCaption />
                    </ItemWrapper>
                </WorkWrapper>
            </WorkContainer>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 350px;
    height: 1080px;
    display: grid;
    grid-template-rows: min-content;
    align-items: start;
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

const WorkContainer = styled.div`
    display: grid;
    justify-items: center;
`;

const WorkWrapper = styled.div`
    width: 640px;
    height: 320px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`;


const WorkItems = styled.img`
    width: 320px;
    height: 320px;
    cursor: pointer;
    transition: all 0.3s linear;
    transform: scale3d(1, 1, 1);

    background: ${(props) => (props.background || "#FFFFFF")};
`;

const ItemCaption = styled.div`
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    display: table;
`;

const ItemWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: inline-block;
    border: none;
    cursor: pointer;

    &:hover ${ItemCaption}{
        background: rgba(255,255,255,0.3);
    }

    &:hover ${WorkItems}{
        transform: scale3d(1.2, 1.2, 1);
    }
`;