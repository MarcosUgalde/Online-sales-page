import { styled } from 'styled-components'

const Body =  styled.section`
    @media screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Form = styled.Form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default {
    Body,
    Form,
    Field
}