import {styled} from "../../../stitches.config.ts";
import {Link} from "react-router-dom";

export const LinkTo = styled(Link, {
    width: 'fit-content',
    height: 'fit-content',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    variants: {
        color: {
            color1: {
                backgroundColor: '$baseColor1',
                color: '$baseColor3',
            },
            color2: {
                backgroundColor: '$baseColor2',
                color: '$baseColor3'
            },
            color3: {
                backgroundColor: '$baseColor3',
                color: '$baseColor1'
            },
            color4: {
                backgroundColor: '$baseColor4',
                color: '$baseColor3'
            },
            color5: {
                backgroundColor: '$baseColor5',
                color: '$baseColor3'
            },
        },
        outline: {
            color1: {
                outline: '1px solid $baseColor1',
                backgroundColor: 'transparent',
                color: '$baseColor1'
            },
            color2: {
                outline: '1px solid $baseColor2',
                backgroundColor: 'transparent',
                color: '$baseColor2'
            },
            color3: {
                outline: '1px solid $baseColor3',
                backgroundColor: 'transparent',
                color: '$baseColor3'
            },
            color4: {
                outline: '1px solid $baseColor4',
                backgroundColor: 'transparent',
                color: '$baseColor4'
            },
            color5: {
                outline: '1px solid $baseColor5',
                backgroundColor: 'transparent',
                color: '$baseColor5'
            },
        },
        fontWeight: {
            100: {
                fontWeight: 100,

            },
            200: {
                fontWeight: 200,

            },
            300: {
                fontWeight: 300,

            },
            400: {
                fontWeight: 400,

            },
            500: {
                fontWeight: 500,

            },
            600: {
                fontWeight: 600,

            },
            700: {
                fontWeight: 700,

            },
            800: {
                fontWeight: 800,

            },
            900: {
                fontWeight: 900,

            }
        },
        fontSize: {
            sm: {
                fontSize: '10pt',
            },
            md: {
                fontSize: '12pt',
            },
            lg: {
                fontSize: '14pt',
            }
        },
        borderRadius: {
            sm: {
                borderRadius: '10px'
            },
            md: {
                borderRadius: '15px'
            },
            lg: {
                borderRadius: '30px'
            },

            full: {
                borderRadius: '100%'
            },
        },
        size: {
            sm: {
                px: '10px',
                py: '5px'
            },
            md: {
                px: '15px',
                py: '7.5px'
            },
            lg: {
                px: '20px',
                py: '10px'
            }
        },
        textDecoration: {
            true: {
                textDecoration: 'underline',
            }
        }
    }
})
