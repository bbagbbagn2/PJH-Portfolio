import { toPx } from '@mrolaolu/helpers';
import { css } from 'styled-components'; // Replace 'vue-styled-components' with 'styled-components' for React

export const BREAKPOINTS: Record<string, number> = {
  small: 420,
  medium: 700,
  large1: 1024,
  large2: 1440,
  xLarge: 1500,
  portrait: 580,
};

export const breakpoints: Record<string, number> = Object.keys(BREAKPOINTS).reduce(
  (acc, cur) => {
    let breakpointValue = BREAKPOINTS[cur];

    return {
      ...acc,
      [cur]: breakpointValue,
      ['>' + cur]: breakpointValue + 1,
      ['<' + cur]: breakpointValue - 1,
    };
  },
  {}
);

export function computeValue(value: string | number): string {
  return typeof value === 'number'
    ? toPx(value)
    : value in breakpoints
    ? toPx(breakpoints[value])
    : value.toString();
}

export const minWidth = (value: string | number) => (body: any) => css`
  @media (min-width: ${computeValue(value)}) {
    ${body};
  }
`;

export const maxWidth = (value: string | number) => (body: any) => css`
  @media (max-width: ${computeValue(value)}) {
    ${body};
  }
`;

export const between = (min: string | number, max: string | number) => (body: any) => css`
  @media (min-width: ${computeValue(min)}) and (max-width: ${computeValue(max)}) {
    ${css(body)};
  }
`;

export const media = { between, maxWidth, minWidth, breakpoints };
