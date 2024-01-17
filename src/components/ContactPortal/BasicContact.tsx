import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/index';

export default function BasicContact() {
  return (
    <StyledBasicContact>
      <StyledSayHello>say hello</StyledSayHello>
      <ul>
        <NavItem href="#">pyoungh137@gmail.com</NavItem>
        <NavItem href="#">010.9207.8758</NavItem>
      </ul>
    </StyledBasicContact>
  );
}

const StyledBasicContact = styled.div`
  position: relative;
  font-size: 1em;
  line-height: 2.5;

  ul {
    font-size: 1.15em;
  }

  a {
    color: currentColor;
  }

  @media (min-width: 591px) {
    margin-right: 18vw;
  }

  @media (max-width: 590px) {
    margin-right: 12vw;
  }

  @media (min-width: 591px) {
    margin-right: 18vw;
  }
`;

const StyledSayHello = styled.span`
  color: #cbc9e2;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
