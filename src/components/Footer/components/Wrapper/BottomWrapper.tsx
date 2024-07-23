import React from 'react';
import SocialContact from '@_components/ContactPortal/SocialContact';
import { BottomWrapper } from '../InnerWrapper';

export default function FooterBottomWrapper() {
  return (
    <BottomWrapper>
      <span>&copy; PJH Portfolio {new Date().getFullYear()}</span>
      <SocialContact className="social-contact" />
    </BottomWrapper>
  );
}
