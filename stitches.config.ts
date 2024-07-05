import {createStitches} from '@stitches/react';

export const {css} = createStitches({
    media:{
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    theme:{
        colors:{
            'color-1': '#BBBBDE',
            'color-2': '#7071C4',
            'color-3': '#2B2B5F',
            'color-4': '#ADADD7',
            'color-5': '#5D5D68',
        },
    },
})