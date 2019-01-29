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

export const theme = {
    fonts: {
        regular: 'Archivo',
        narrow: 'Archivo Narrow'
    },
    fontSizes: [
        12, 14, 16, 24, 32, 48, 64, 96, 128
    ],
    colors,
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
            padding : '0.2em 1em 0.2em 1em',
            color: colors.black[0],
            backgroundColor: colors.orange[0],
            '&:hover': {
                backgroundColor: colors.orange[1],
            },
        },
    }
}

