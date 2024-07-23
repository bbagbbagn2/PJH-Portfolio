export const colors = {
  default: '#0b2b40',
  lemon: '#dbf227',
  blue: '#222831',
  white: '#fff',
  black: '#000',
  accent: '#d9acf5',
  background: '#222831',
  bg200: '#393e46',
  bg300: '#454e59',
  primary: '#892CDC',
  text: '#FDEBED',
  toggle: '#D9ACF5',
} as const;

export const theme = {
  colors,
  header: {
    padding: '6em',
    height: '11.12em',
  },
} as const;

export default theme;
