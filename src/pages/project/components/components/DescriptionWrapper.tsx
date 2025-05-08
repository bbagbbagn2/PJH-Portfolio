import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@_components/theme';

interface Stack {
  name: string;
}

interface Summaries {
  name: string;
}

interface DescriptionWrapperProps {
  summaries?: Summaries[];
  stack?: Stack[];
  children?: ReactNode;
}

export default function DescriptionWrapper({
  summaries,
  stack,
}: DescriptionWrapperProps) {
  return (
    <Container>
      <SubTitle isFirst>요약</SubTitle>
      <StyledList isFirst>
        {summaries &&
          summaries.length > 0 &&
          summaries.map((item, index) => <li key={index}>{item.name}</li>)}
        {/* <li>
          웹 서비스 개발 전 과정을 경험해보고 싶고, 기존 아이콘 플랫폼의 불편한
          UX를 개선하기 위해 개발
        </li>
        <li>최초 웹 개발 경험(HTML, CSS, JS, React)</li>
        <li>최초 협업 경험(Git, Notion)</li>
        <li>프론트엔드 분야에 본격적으로 도전하게 된 계기</li> */}
      </StyledList>
      <Paragraph isCaption="0.7">
        주요 기능 : 구글 로그인, 아이콘 다운로드/업로드/수정/삭제/좋아요, 프로필
        변경, 사용자 팔로우
      </Paragraph>

      <SubTitle>개발 배경</SubTitle>
      <Paragraph>
        2022년 1학기 재학 중, 3인 팀으로 졸업작품 프로젝트를 진행했습니다.
        다양한 아이디어를 제안하고 논의한 끝에, 아이콘 다운로드 시의 불편함을
        개선할 수 있는 웹사이트를 개발하기로 결정했습니다. 특히 SVG 확장자의
        벡터 기반 특성을 활용하면 색상이나 크기 등을 쉽게 수정할 수 있다는 점에
        주목해, 해당 기능을 추가하면 더 좋을 것이라 판단했습니다.
      </Paragraph>
      <SubTitle>사용 기술</SubTitle>
      {stack && stack.length > 0 && (
        <Paragraph>{stack.map((tech) => tech.name).join(', ')}</Paragraph>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 3em;
  position: relative;
  max-width: 940px;
  font-size: 16px;
  line-height: 1.4;
`;

const StyledList = styled.ul<{ isFirst?: boolean }>`
  list-style: disc;
  color: ${colors.white};

  margin-bottom: ${({ isFirst }) => (isFirst ? '16px' : '0')};

  > li {
    margin-left: 24px;
    list-style: disc;
  }
`;

const SubTitle = styled.h2<{ isFirst?: boolean }>`
  margin-bottom: 16px;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 700;

  padding-top: ${({ isFirst }) => (isFirst ? '0' : '32px')};
`;

const Paragraph = styled.p<{ isCaption?: string }>`
  margin: 0;
  color: ${colors.white};

  opacity: ${({ isCaption }) => (isCaption ? '0.7' : '1')};
`;
