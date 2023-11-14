import React from 'react';
import * as S from './styles';

import Basic from '../../literal-squce-drip/ContactPortal/BasicContact';
import Social from '../../literal-squce-drip/ContactPortal/SocilaContact';
import CrossSiteNav from '../../literal-squce-drip/CrossSiteNav/index';

export default function Footer() {
    return (
        <S.Footer>
            <S.InnerContentBox>
                <S.FooterMainBox className='footer-main'>
                    <Basic />
                    <CrossSiteNav />
                </S.FooterMainBox>
                <S.FooterBottomBox className='footer-bottom'>
                    <span>&copy; JH Portfolio 2023</span>
                    <Social />
                </S.FooterBottomBox>
            </S.InnerContentBox>
        </S.Footer>
    )
}
