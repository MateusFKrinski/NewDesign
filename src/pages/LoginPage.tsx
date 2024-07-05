import {CloudsDetail} from "../components/CloudsDetail.tsx";
import {styled} from "@stitches/react";

export function LoginPage(){
    return(
        <>
            <PageStyle>
                <MainStyle>
                    <h1>Hello World</h1>
                    <CloudsDetail />
                </MainStyle>
            </PageStyle>
        </>
    )
}

const PageStyle = styled('div', {
    width: '100%',
    height: '100vh',
    backgroundColor: '#fff',
})

const MainStyle = styled('div',{
    padding: '0',
    margin: '0',
})