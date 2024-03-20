import styled, { css } from 'styled-components';

import theme from '../theme';

export const Footer = styled.footer`
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
  background: ${theme.colors.default};
  color: ${theme.colors.lemon};

  &.homeEnv {
    @media (min-width: 701px) {
      &[aria-hidden='true'] {
        .footer-main,
        .fotoer-bottom {
          opacity: 0;
          transform: translate3d(0, 40px, 0);
        }
      }
      @media (max-height: 1199px) {
        height: 100vh;
      }
    }
  }

  &.projectEnv {
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
  }

  .footer-main,
  .footer-bottom {
    width: 100%;
    display: flex;

    ${props =>
      !props.className?.includes('projectEnv') &&
      css`
        @media (min-width: 701px) {
          transition: transform 0.5s, opacity 0.2s;
        }
      `}
  }

  .basic-contact {
    @media (min-width: 591px) {
      margin-right: 18vw;
    }

    @media (max-width: 590px) {
      margin-right: 12vw;
    }
  }

  .social-contact {
    @media (max-width: 580px) {
      li:not(:last-of-type) {
        margin-right: 1em;
      }
    }

    @media (max-width: 460px) {
      display: none;
    }
  }

  li a {
    color: currentColor;
  }

  @media (max-width: 580px) {
    font-size: 1.5rem;
  }
`;

export const FooterMainBox = styled.div`
  margin-bottom: 7.4em;

  @media (min-width: 700px) {
    transition-delay: 300ms;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }

  > ul {
    margin-top: 2.05em;
    font-size: 1.15em;
    line-height: 2.5;
  }
`;

export const FooterBottomBox = styled.div`
  padding-top: 3em;
  justify-content: space-between;
  border-top: 1px solid rgba(186, 221, 118, 0.7);
  font-size: 1.15em;

  @media (max-width: 460px) {
    justify-content: left;
  }

  @media (min-width: 700px) {
    transition-delay: 500ms;
  }
`;
