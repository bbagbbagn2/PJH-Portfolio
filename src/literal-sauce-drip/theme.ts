export const colors = {
    default: '#0b2b40',
    lemon: '#dbf227',
    blue: '#3c8fdd',
    white: '#fff',
    black: '#000',
} as const;

export const theme = {
    colors,
    header: {
        padding: '6em',
        height: '11.12em',
    },
} as const;

export default theme;