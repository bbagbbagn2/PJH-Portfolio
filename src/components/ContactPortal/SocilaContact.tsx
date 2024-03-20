import React from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/index';

export default function SocialContact() {
  return (
    <SocialContactList>
      <NavItem href="https://github.com/bbagbbagn2" external>
        GitHub
      </NavItem>
    </SocialContactList>
  );
}

const SocialContactList = styled.ul`
  position: relative;

  li {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 2.5em;
    }
  }

  a {
    color: currentColor;
  }
`;
