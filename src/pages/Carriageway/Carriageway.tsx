import React from 'react';
import InnerSection from '@_components/InnerSection';
import { CarriagewayContainer } from '@_components/InnerContainer';
import { CarriagewayArticle, ArticleWrapper } from '@_components/Article';
import LaneContainer from './components/LaneContainer';
import LaneBox from './components/LaneBox';
import { CarriagewayTitle } from '@_components/Title';
import { CarriagewayText } from '@_components/Text';
import Button from '@_components/Button';

export default function Carriageway() {
  return (
    <InnerSection>
      <CarriagewayContainer>
        <LaneContainer>
          <LaneBox>
            <CarriagewayArticle>
              <ArticleWrapper>
                <CarriagewayTitle>
                  개발,
                  <br />
                  디자인
                </CarriagewayTitle>
                <CarriagewayText>
                  오픈 소스,
                  <br />
                  개인 &<br />팀 프로젝트.
                  <br />
                </CarriagewayText>
              </ArticleWrapper>
            </CarriagewayArticle>
            <Button href="/project" text="프로젝트 보러 가기" />
          </LaneBox>
          <LaneBox>
            <CarriagewayArticle>
              <ArticleWrapper>
                <CarriagewayTitle>
                  나의
                  <br />
                  이력서
                </CarriagewayTitle>
                <CarriagewayText>
                  자기소개,
                  <br />
                  스킬 &<br />
                  프로젝트 소개.
                  <br />
                </CarriagewayText>
              </ArticleWrapper>
            </CarriagewayArticle>
            <Button
              href="https://www.notion.so/parkresume/c4ce189e86cf43e8858349a33ebb482d"
              target="_blank"
              text="이력서 보러가기"
            />
          </LaneBox>
        </LaneContainer>
      </CarriagewayContainer>
    </InnerSection>
  );
}