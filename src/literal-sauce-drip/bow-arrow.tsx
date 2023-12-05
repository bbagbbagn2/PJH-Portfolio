import React from 'react';
import styled from 'styled-components';

interface BowArrowProps {
    direction?: 'left' | 'right';
}

const SvgContainer = styled.svg`
    width: 72px;
    height: 72px;
`;

const ArrowPath = styled.path`
    fill: none;
    stroke: #3c8fdd;
    stroke-width: 2;
    stroke-miterlimit: 0;
`;

const BowArrow: React.FC<BowArrowProps> = ({ direction = 'right' }) => (
    <SvgContainer
    width="72"
    height="22"
    viewBox="0 0 72 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ArrowPath
      d={
        direction === 'right'
          ? 'M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8'
          : 'M72.807 11.199H2.093M11.933 1.399l-9.8 9.8 9.8 9.8'
      }
    />
  </SvgContainer>
);

export default BowArrow;

