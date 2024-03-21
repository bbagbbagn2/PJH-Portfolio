import React from 'react';
import styled from 'styled-components';
import ProfileContainer from './components/ProfileContainer';
import ContentContainer from './components/ContentContainer/ContentContainer';

export default function Profile() {
  return (
    <Section>
      <ProfileContainer />
      <ContentContainer />
      <MobileAvatarBox />
    </Section>
  );
}

const Section = styled.section`
  /* Positioning */
  position: relative;
  padding-bottom: 4.17rem;

  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Styling */
  background: #3c8fdd;

  /* User handling */
  user-select: auto;

  /* Z-index */
  z-index: 3;

  @media (max-width: 580px) {
    margin-bottom: 10rem;
    padding-bottom: 0;
  }

  @media (min-width: 581px) {
    background: linear-gradient(90deg, #3c8fdd 67%, #dbf227 33%);
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
  background: #dbf227;

  /* Hide on Largier Screens */
  @media (min-width: 581px) {
    display: none;
  }
`;
