import React from 'react';
import styled from 'styled-components';
import SayHello from './SayHello';
import BasicContactList from './BasicContanctList';


export default function BasicContact() {
  return (
    <Container>
      <SayHello />
      <BasicContactList />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  font-size: 1em;
  line-height: 2.5;

  ul {
    font-size: 1.15em;
  }

  a {
    color: currentColor;
  }

  @media only screen and (min-width: 591px) {
    margin-right: 18vw;
  }

  @media only screen and (max-width: 590px) {
    margin-right: 12vw;
  }
`;
