import React, { ComponentType } from 'react';
import styled, { css } from 'styled-components';

interface StyledSectionProps {
    'aria-hidden': string;
}

function createStyledSection(tagName: any = 'section', props: any = {}) {
    const StyledSectionComponent = styled(tagName)<{isFooter?: boolean}>`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:focus {
        outline: none;
        }

        &:not([data-section='footer']) {
            @media (max-width: 580px) {
                margin-bottom: 10rem;
            }
        }

        &:not([data-section='une']):not([data-section='footer']) {
            @media (min-width: 581px) and (max-width: 700px) {
                &:not([data-section='trois']) {
                    padding-top: 15vh;
                    padding-bottom: 15ch;
                }

                &[data-section='quatre'] {
                    padding-bottom: 0;
                }
            }

            @media (max-height: 1199) {
                @media (min-width: 701px) {
                    min-height: 100vh;
                }
            }
        }

        @media (min-width: 701px) {
            @media (max-height: 1199px) {
                &:not([data-seciton='une']) {
                    height: 100vh;
                }
            }

            &[aria-hidden='true'] {
                overflow: hidden;
                user-select: none;
            }
        }

        @media (min-height: 1200px) {
            &:not([data-section='une']) {
                padding-top: 10rem;
                padding-bottom: 10rem;
            }
        }

        &[aria-hidden='false'] {
            z-index: 3;
            user-select: auto;

            @media (min-width: 701px) {
                scroll-snap-align: start;
            }

            .cavalier {
                p, h1 {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }
            }
        }

        .inner-content {
            width: 100%;
            display: flex;
        }
    `;

    return StyledSectionComponent;
}

const StyledSection = createStyledSection();
const StyledFooter = createStyledSection('footer');

interface StyledFooterProps {
    'aria-hidden': string;
}

interface SectionProps {
    name: string;
    isFooter: boolean;
}

export default function Section({ name, isFooter }: SectionProps) {
    const StyledComponent = isFooter ? StyledFooter : StyledSection;
    const ariaHidden = String;

    return (
        <StyledComponent data-section={name}  tabIndex={isFooter && -1} aria-hidden={ariaHidden}>
            <div className='inner-content'>
            </div>
        </StyledComponent>
    )
}


