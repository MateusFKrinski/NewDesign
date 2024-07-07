import {styled} from "../../stitches.config.ts";
import {CloudsDetail} from "../components/CloudsDetail.tsx";
import {LinkTo} from "../components/UI/Link.tsx";
import {Arrow} from "../components/UI/Arrow.tsx";

export function LoginPage() {
    return (
        <>
            <PageStyle>
                <MainStyle>
                    <Grid>
                        <GridTop>
                            <Refine>
                                <LinkTo to='/' size='md' borderRadius='lg' fontSize='md' outline='color5'
                                        fontWeight='300'>
                                    <Arrow fontSize='sm' orientation='left'/>
                                    Home
                                </LinkTo>
                            </Refine>
                            <CloudsDetail/>
                        </GridTop>
                        <GridBottom>

                        </GridBottom>
                    </Grid>
                </MainStyle>
            </PageStyle>
        </>
    )
}

const PageStyle = styled('div', {
    width: '100%',
    height: '100%',
    linearGradient: '$baseColor3, $baseColor2'
})

const MainStyle = styled('div', {
    height: '100%',
    width: '100%',
    padding: '0',
    margin: '0',
})

const Grid = styled('div', {
    '@supports (display: grid)': {
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '200px 1fr',
        padding: '0',
        margin: '0',
    },
})

const GridTop = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0',
    margin: '0',
})

const Refine = styled('div', {
    weight: '100%',
    px: '30px',
    py: '20px'
})

const GridBottom = styled('div', {
    backgroundColor: '$baseColor5',
    padding: '0',
    margin: '0',
})