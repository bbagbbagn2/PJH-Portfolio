import React from 'react';
import styled from 'styled-components';

import { colors } from '@_components/theme';

export default function SayHello() {
  return <SayHelloSpan>say hello</SayHelloSpan>;
}

const SayHelloSpan = styled.span`
  color: ${colors.white};
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
