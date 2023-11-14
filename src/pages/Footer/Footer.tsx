import React from 'react';
import * as S from './styles';

import Basic from '../../literal-squce-drip/ContactPortal/BasicContact.tsx';
import Social from '../../literal-squce-drip/ContactPortal/SocilaContact.tsx';
import CrossSiteNav from '../../literal-squce-drip/CrossSiteNav/index.tsx';

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
