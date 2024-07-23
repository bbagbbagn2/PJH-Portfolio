import React from 'react';
import BasicContact from '@_components/ContactPortal/BasicContact/BasicContact';
import CrossSiteNav from '@_components/CrossSiteNav/CrossSiteNav';
import { MainWrapper } from '../InnerWrapper';

export default function FooterMainWrapper() {
  return (
    <MainWrapper>
      <BasicContact />
      <CrossSiteNav />
    </MainWrapper>
  );
}
