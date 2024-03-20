import React from 'react';
import styled from 'styled-components';

type CavalierArticleProps = {
    justifyContent?: string;
}

export default function InnerContainer() {
  return (
      <Container>
        <CavalierArticle>
          <CavalierBox>
            <CardHeading>Possibility;</CardHeading>
            <Paragraph>
              저는 빠르게 변화하는 프론트엔드 기술 환경에 대한 유연성을 갖추고
              있습니다. 개인 프로젝트 및 팀 프로젝트를 통해 적용 가능한 기술과
              노력을 통해 기여할 가능성을 높이고 있는 것에 최선을 다 하고
              있습니다.
            </Paragraph>
          </CavalierBox>
        </CavalierArticle>
        <CavalierArticle justifyContent='flex-end'>
          <CavalierBox>
            <CardHeading>Refactoring;</CardHeading>
            <Paragraph>
              코드의 가독성과 유지보수를 높이기 위한 리팩토링을 꾸준히 하고
              있습니다. 조금씩이라도 코드를 효율적으로 수정하고, 리팩토링을
              꾸준히 함으로써 제가 프로젝트에 임하는 자세와 저의 성실함을 나타날
              것입니다.
            </Paragraph>
          </CavalierBox>
        </CavalierArticle>
      </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 580px) {
    padding: 0 15vw;
  }

  @media (min-width: 581px) and (max-width: 700px) {
    padding: 0 7rem;
  }

  @media (min-width: 701px) {
    padding: 0 10rem;
  }

  @media (min-width: 701px) and (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1501px) {
    max-width: 1760px;
  }
`;

const CavalierArticle = styled.article<CavalierArticleProps>`
  position: relative;
  display: flex;

  justify-content: ${props => props.justifyContent};

  @media (max-width: 700px) {
    :not(:last-of-type) {
      margin-bottom: 6vh;
    }
  }

  h1,
  p {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity 0.2s, transform 0.5s;
  }
`;

const CavalierBox = styled.div`
  position: relative;
`;

const CardHeading = styled.h1`
  font-size: 4em;
  font-weight: 900;
  line-height: 1.1;
  color: #3c8fdd;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.2s, transform 0.5s;

  @media (min-width: 701px) {
    max-width: 30vw;
    transition-delay: 200ms;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #0b2b40;

  @media (max-width: 580px) {
    font-size: 1.3em;
  }

  @media (min-width: 701px) {
    width: 32vw;
    max-width: 701px;
    font-size: 1.07em;
    transition-delay: 310ms;
  }
`;
