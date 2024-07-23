import React from 'react';
import styled from 'styled-components';

import NavItem from '../NavItem/index';
import { colors } from '@_components/theme';
import { GITHUB_URL } from '@_config/settings';

type SocialContactProps = {
  className?: string;
};

export default function SocialContact({ className }: SocialContactProps) {
  return (
    <SocialContactList className={className}>
      <NavItem href={GITHUB_URL} external>
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
    color: ${colors.text};
  }
`;
