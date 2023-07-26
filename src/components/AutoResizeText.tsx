import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

interface AutoResizeTextProps {
  text: string;
  minWidth: number;
}

const AutoResizeContainer = styled.div<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  overflow: hidden;
  color: #FFFFFF;
`;

const AutoResizeText: React.FC<AutoResizeTextProps> = ({ text, minWidth }) => {
  const [fontSize, setFontSize] = useState<number>(0);

  useEffect(() => {
    const resizeFont = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const originalFontSize = 60; // 기본 폰트 크기

        // 폰트 크기 계산
        const newFontSize = Math.max(originalFontSize, (containerWidth / minWidth) * originalFontSize);
        setFontSize(newFontSize);
      }
    };

    window.addEventListener('resize', resizeFont);
    resizeFont(); // 컴포넌트 마운트 시 폰트 크기 설정

    return () => {
      window.removeEventListener('resize', resizeFont);
    };
  }, [minWidth]);

  const containerRef = useRef<HTMLDivElement>(null);

  return <AutoResizeContainer ref={containerRef} fontSize={fontSize}>{text}</AutoResizeContainer>;
};

export default AutoResizeText;
