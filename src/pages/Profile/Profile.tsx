import React from 'react';
import styled from 'styled-components';

import ProfileContainer from './components/ProfileContainer';
import ContentContainer from './components/ContentContainer/ContentContainer';
import { colors } from '@_components/theme';

export default function Profile() {
  return (
    <StyledSection>
      <ProfileContainer />
      <ContentContainer />
      <MobileAvatarBox />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  /* Positioning */
  position: relative;
  padding-bottom: 4.17rem;

  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Styling */
  background: ${colors.background};

  /* User handling */
  user-select: auto;

  /* Z-index */
  z-index: 3;

  @media (max-width: 580px) {
    padding-bottom: 0;
  }

  @media (min-width: 581px) {
    background: linear-gradient(90deg, ${colors.background} 67%, ${colors.primary} 33%);
  }

  @media (max-width: 700px) {
    font-size: 0.95em;
  }
`;

const MobileAvatarBox = styled.div`
  /* Mobile View Styles */
  padding: 7rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};

  /* Hide on Largier Screens */
  @media (min-width: 581px) {
    display: none;
  }
`;
