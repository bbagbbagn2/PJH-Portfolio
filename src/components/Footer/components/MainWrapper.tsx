import React from 'react';
import BasicContact from '@_components/ContactPortal/BasicContact/BasicContact';
import CrossSiteNav from '@_components/CrossSiteNav/CrossSiteNav';
import { MainWrapper } from './Container';

type MainWrapperProps = {
  isHome: boolean;
};

export default function FooterMainWrapper({ isHome }: MainWrapperProps) {
  return (
    <MainWrapper>
      <BasicContact />
      <CrossSiteNav classNameProject={isHome ? '' : 'project'} />
    </MainWrapper>
  );
}