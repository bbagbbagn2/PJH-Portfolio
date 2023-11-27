import React from 'react';
import styled, { css } from 'styled-components';

const StyledSection = styled.section`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:focus {
            outline: none;
        }

        @media (max-width: 580px) {
            margin-bottom: 10rem;       
        }

        @media (max-height: 1199px) {
            @media (min-width: 701px) {
                min-height: 100vh;
            }
        }

        @media (min-width: 701px) {
            @media (max-height: 1199px) {
                height: 100vh;
            }

            &[aria-hidden='true'] {
            overflow: hidden;
            user-select: none;
            }
        }

        @media (min-height: 1200px) {
            &:not([data-section:'une']) {
                padding-top: 10rem;
                padding-bottom: 10rem;
            }
            
        }

        &[aria-hidden='false'] {
            z-index: 3;
            user-select: auto;
        }
    `

function createStyledSection({ name, isFooter}) {
    return isFooter ? (
        <StyledFooter data-section={name}>
            <slot />
        </StyledFooter>
    ) : (
        <StyledSection data-section={name}>
            <slot />
        </StyledSection>
    );
}

export default createStyledSection();
