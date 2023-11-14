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
