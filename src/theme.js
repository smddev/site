import Color from 'color';

const colors = {
    black: [
        '#25272E',
        `${Color('#25272E').fade(0.8)}`
    ],
    white: [
        '#FFFFFF'
    ],
    gray: [
        '#44464F',
        '#5e5e5e',
        '#A8A9AE',


    ],
    orange: [
        '#FDB811',
        '#F5941E',
        '#F36E1E',
        '#CC5C19',
    ],
}

const fonts = {
    base: 'Khula',
}

export const theme = {
    fonts,
    colors,
    fontSizes: [10, 12, 14, 16, 24, 32, 48, 64, 96, 128, 20, 18, 30],
    lineHeight: [10, 12, 14, 24, 36, 48, 48, 70, 96, 128, 30, 22, 36],
    fontWeights: [300, 400, 700],
    space: [
        0, 4, 8, 16, 32, 40, 64, 72, 100, 128, 140, 184, 256
    ],
    radii: [
        2
    ],
    links: {
        active: {
            borderBottom: '3px solid'
        }
    },
    icons: [32, 40, 64, 92, 128],
    breakpoints: [640, 832, 1200].map(b => b + 'px')
}

