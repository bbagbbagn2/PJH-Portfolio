import * as React from 'react';
import styled from 'styled-components';

import { BsInfinity, BsGear } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import PortfolioTitle from "../../components/Title.tsx";

export default function Profile(): JSX.Element {
    return (
        <Section>
            <CardList>
                <CardItem>
                    <CardBox>
                        <CardHeading>Possibility</CardHeading>
                        <Paragraph>저는 빠르게 변화하는 프론트엔드 기술 환경에 대한 유연성을 갖추고 있습니다.
                            개인 프로젝트 및 팀 프로젝트를 통해 적용 가능한 기술과 노력을 통해 기여할 가능성을 높이고 있는 것에 최선을 다 하고 있습니다.
                        </Paragraph>
                    </CardBox>
                </CardItem>
                <CardItem>
                    <CardBox>
                        <CardHeading>Refactoring</CardHeading>
                        <Paragraph>코드의 가독성과 유지보수를 높이기 위한 리팩토링을 꾸준히 하고 있습니다.
                            조금씩이라도 코드를 효율적으로 수정하고, 리팩토링을 꾸준히 함으로써 제가 프로젝트에 임하는 자세와 저의 성실함을 나타날 것입니다.
                        </Paragraph>
                    </CardBox>
                </CardItem>
                <CardItem>
                    <CardBox>
                        <CardHeading>Communications</CardHeading>
                        <Paragraph>팀 프로젝트 내에서 협업과 의사소통의 중요성을 인지하고 있습니다.
                            다른 팀원들의 피드백을 환영하며, 지속적인 개선을 통해 프로젝트의 품질을 향상시키디 위해 노력합니다.
                        </Paragraph>
                    </CardBox>
                </CardItem>
            </CardList>
        </Section>
    );
}

const Section = styled.section`
    position: relative;
    padding: 0 8%;
    height: 100vh;
    min-height: 100vh;
    display: grid;
    align-items: center;
`;

const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
`;

const CardItem = styled.li`
    width: 100%;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.35);
    gap: 30px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        border-color: #FFF;
        box-shadow: none;
    }
`;

const CardBox = styled.div`
    padding: 2rem;
    height: 100%;
    color: #FFF;
`;

const CardHeading = styled.h1`  
    margin-bottom: 1rem;
    color: #FFF;
    font-size: 3.27rem;
    font-weight: bold;
`;

const Paragraph = styled.p`
    font-size: 1rem;
`