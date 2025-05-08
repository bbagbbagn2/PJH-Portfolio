import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@_components/theme';

interface DescriptionWrapperProps {
  features?: { name: string }[];
  description: string[];
  children?: ReactNode;
}

export default function DescriptionWrapper({
  description,
  features,
}: DescriptionWrapperProps) {
  return (
    <Container>
      <Paragraph>
        구직 활동에 활용하기 위한 개인 웹 포트폴리오를 구축하였습니다. 정적
        콘텐츠 중심이므로 Next.js보다 React + Netlify 조합이 적합하다고
        판단했고, 경량화와 배포 효율성에 초점을 맞췄습니다.
      </Paragraph>
      <SubTitle>핵심 기능</SubTitle>
      {features && features.length > 0 && (
        <ul>
          {features.map((features, index) => (
            <Paragraph>{features.name}</Paragraph>
          ))}
        </ul>
      )}
      {/* {description.map((desc, index) => (
        <Paragraph key={index}>{desc}</Paragraph>
      ))} */}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 3em;
  position: relative;
  max-width: 940px;

  ul > li {
    font-size: 24px;
  }
`;

const SubTitle = styled.h2`
  padding-top: 32px;
  padding-bottom: 12px;
  font-size: 28px;
  letter-spacing: 140%;
  font-weight: 500;
`;

const Paragraph = styled.p`
  margin: 0;
  color: ${colors.white};
  font-size: 16px;
  line-height: 140%;
`;
