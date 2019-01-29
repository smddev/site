const colors = {
    black: [
        '#25272E'
    ],
    white: [
        '#FFFFFF'
    ],
    gray: [
        '#5e5e5e',
        '#A8A9AE'
    ],
    orange: [
        '#F36E1E',
        '#F5941E',
        '#FDB811'
    ],
}

const fonts = {
    regular: 'Archivo',
    narrow: 'Archivo Narrow'
}

export const theme = {
    fonts,
    colors,
    fontSizes: [
        12, 14, 16, 24, 32, 48, 64, 96, 128
    ],
    space: [
        0, 4, 8, 16, 32, 64, 128, 256
    ],
    links: {
        active: {
            borderBottom: '3px solid'
        }
    },
    icons: [64, 92, 128],
    buttons: {
        primary: {
            padding: '0.2em 1em 0.2em 1em',
            color: colors.black[0],
            fontFamily: fonts.regular,
            backgroundColor: colors.orange[0],
            '&:hover': {
                backgroundColor: colors.orange[1],
            },
        },
    },
    breakpoints: [40, 52, 64].map(b => b + 'em')
}

