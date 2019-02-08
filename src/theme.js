const colors = {
    black: [
        '#25272E'
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
    fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
    lineHeight: [12, 14, 16, 36, 32, 48, 70, 96, 128],
    fontWeights: [300, 400, 700],
    space: [
        0, 4, 8, 16, 32, 40, 64, 72, 128, 256
    ],
    links: {
        active: {
            borderBottom: '3px solid'
        }
    },
    icons: [32, 64, 92, 128],
    breakpoints: [640, 832, 1200].map(b => b + 'px')
}

