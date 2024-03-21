import React from 'react';
import styled from 'styled-components';
import InnerSection from '@_components/InnerSection';
import { CarriagewayContainer } from '@_components/InnerContainer';
import { CarriagewayArticle, ArticleWrapper } from '@_components/Article';
import LaneContainer from './components/LaneContainer';
import LaneBox from './components/LaneBox';
import { CarriagewayTitle } from '@_components/Title';

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
                <CavalierParagraph>
                  오픈 소스,
                  <br />
                  개인 &<br />팀 프로젝트.
                  <br />
                </CavalierParagraph>
              </ArticleWrapper>
            </CarriagewayArticle>
            <ProjectLink href="/project">
              <LinkBox>프로젝트 보러가기</LinkBox>
            </ProjectLink>
          </LaneBox>
          <LaneBox>
            <CarriagewayArticle>
              <ArticleWrapper>
                <CarriagewayTitle>
                  나의
                  <br />
                  이력서
                </CarriagewayTitle>
                <CavalierParagraph>
                  자기소개,
                  <br />
                  스킬 &<br />
                  프로젝트 소개.
                  <br />
                </CavalierParagraph>
              </ArticleWrapper>
            </CarriagewayArticle>
            <ProjectLink
              target="_blank"
              href="https://www.notion.so/parkresume/c4ce189e86cf43e8858349a33ebb482d"
            >
              <LinkBox>이력서 보러가기</LinkBox>
            </ProjectLink>
          </LaneBox>
        </LaneContainer>
      </CarriagewayContainer>
    </InnerSection>
  );
}

const CavalierParagraph = styled.p`
  width: unset;
  font-size: 1.6em;
  color: #0b2b40;
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition: trnsform 0.5s, opacity 0.2s;

  @media (min-width: 701px) {
    max-width: 701px;
    transition-delay: 301ms;
  }
`;

const ProjectLink = styled.a`
  /* Positioning */
  position: relative;

  /* Dimensions */
  min-width: 23.222em;

  /* Layout */
  display: inline-flex;

  /* Styling */
  background: transparent;
  font-size: 0.9em;
  font-weight: bold;
  text-transform: uppercase;

  /* Overflow handling */
  overflow: hidden;

  /* User Interation */
  user-select: none;

  /* White Space Handling */
  white-space: nowrap;

  :hover {
    div {
      color: #fff;
      border-color: rgb(60, 143, 221);
    }

    div::before {
      transform: translateX(0);
      background: #3c8fdd;
    }
  }
  div::before {
    /* Pseudo-element for an animated background effect */
    content: '';

    /* Positioning */
    position: absolute;
    top: -0.1em;
    bottom: 0;
    left: 0;
    right: 0;

    /* Dimensions */
    width: 100%;
    height: 108%;

    /* Styling */
    background: currentColor;
    pointer-events: none;

    /* Initial transformation */
    transform: translateX(-100%);

    /* Transition effect */
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);

    /* Z-index */
    z-index: -1;
  }
`;

const LinkBox = styled.div`
  /* Positioning */
  position: relative;
  padding: 1.25em 3em;

  /* Dimensions */
  width: 100%;

  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Styling */
  border: 1px solid currentColor;
  color: #3c8fdd;

  /* Z-index */
  z-index: 1;
`;
