import {createStitches} from '@stitches/react';

export const {styled} = createStitches({
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    theme: {
        colors: {
            baseColor1: '#BBBBDE',
            baseColor2: '#7071C4',
            baseColor3: '#2B2B5F',
            baseColor4: '#ADADD7',
            baseColor5: '#FFFFFF',
        },
    },
    utils: {
        linearGradient: (value) => ({
            background: `linear-gradient(${value})`
        }),
        px: (value) => ({
            paddingLeft: `${value}`,
            paddingRight: `${value}`
        }),
        py: (value) => ({
            paddingTop: `${value}`,
            paddingBottom: `${value}`
        })
    }
});