import {FaArrowLeft} from "react-icons/fa";
import {styled} from "../../../stitches.config.ts";

export const Arrow = styled(FaArrowLeft, {
    variants: {
        fontSize: {
            sm: {
                fontSize: '8pt'
            },
            md: {
                fontSize: '10pt'
            },
            lg: {
                fontSize: '12pt'
            },
        },
        orientation: {
            top: {
                transform: 'rotate(90deg)'
            },
            bottom: {
                transform: 'rotate(270deg)'
            },
            left: {
                transform: 'rotate(0deg)'
            },
            right: {
                transform: 'rotate(180deg)'
            }
        }
    }
})