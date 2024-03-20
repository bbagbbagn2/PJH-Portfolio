import React from 'react';
import styled from 'styled-components';

export default function SayHello() {
  return <SayHelloSpan>say hello</SayHelloSpan>;
}

const SayHelloSpan = styled.span`
  color: #cbc9e2;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
