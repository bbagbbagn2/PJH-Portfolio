import styled, { css } from 'styled-components';

export const BREAKPOINTS = {
  small: 420,
  medium: 700,
  large1: 1024,
  large2: 1440,
  xLarge: 1500,
  portrait: 580,
};

const breakpoints = Object.keys(BREAKPOINTS).reduce((acc, cur) => {
  let breakpointValue = BREAKPOINTS[cur];

  return Object.assign(acc, {
    [cur]: breakpointValue,
    ['>' + cur]: breakpointValue + 1,
    ['<' + cur]: breakpointValue - 1,
  });
}, {});

export function computeValue(value) {
  return typeof value === 'number'
    ? value
    : value in breakpoints
    ? breakpoints[value]
    : value;
}

export const minWidth = (value) => (...body) => css`
  @media (min-width: ${computeValue(value)}px) {
    ${body.join('')}
  }
`;

export const maxWidth = (value) => (...body) => css`
  @media (max-width: ${computeValue(value)}px) {
    ${body.join('')}
  }
`;

export const between = (min, max) => (...body) => css`
  @media (min-width: ${computeValue(min)}px) and (max-width: ${computeValue(max)}px) {
    ${body.join('')}
  }
`;

export default { between, maxWidth, minWidth, breakpoints };