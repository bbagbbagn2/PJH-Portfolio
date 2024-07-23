import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FooterInnerContainer } from '@_components/InnerContainer';
import MainWrapper from './components/Wrapper/MainWrapper';
import BottomWrapper from './components/Wrapper/BottomWrapper';
import theme from '@_components/theme';

export default function FooterSection() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const FooterContainer = isHome ? HomeFooter : ProjectFooter;

  return (
    <FooterContainer>
      <FooterInnerContainer>
        <MainWrapper />
        <BottomWrapper />
      </FooterInnerContainer>
    </FooterContainer>
  );
}

const Footer = styled.footer`
  /* positioning */
  position: relative;

  /* Typhography */
  font-size: 1.2em;

  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: auto;

  /* Z-index */
  z-index: 3;

  /* Styling */
  background: ${theme.colors.bg200};
  color: ${theme.colors.text};

  li a {
    color: currentColor;
  }

  .social-contact {
    @media (max-width: 460px) {
      display: none;
    }
  }

  @media (max-width: 580px) {
    font-size: 1.5rem;
  }
`;

const HomeFooter = styled(Footer)`
  @media (min-width: 701px) {
    @media (max-height: 1199px) {
      height: 100vh;
    }
  }
`;

const ProjectFooter = styled(Footer)`
  margin-top: 7rem;
  height: unset;
  font-size: 0.84rem;

  > div {
    padding-top: 5rem;
    padding-bottom: 3rem;

    @media (max-width: 650px) {
      padding-top: 3rem;
      padding-left: 8.9vw;
      padding-right: 8.9vw;
    }

    @media (min-width: 651px) and (max-width: 1129px) {
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    }
  }
`;
