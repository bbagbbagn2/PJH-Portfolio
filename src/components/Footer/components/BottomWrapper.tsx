import React from 'react';
import SocialContact from '@_components/ContactPortal/SocilaContact';
import { BottomWrapper } from './Container';

export default function FooterBottomWrapper() {
  return (
    <BottomWrapper>
      <span>&copy; JH Portfolio {new Date().getFullYear()}</span>
      <SocialContact className='social-contact' />
    </BottomWrapper>
  );
}