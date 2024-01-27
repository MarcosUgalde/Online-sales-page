import { styled } from 'styled-components'

const Modal = styled.section`
    position: fixed;;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    overflow: auto;
    padding: 20px;
    border-radius: 5px;

    h2, p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* padding-top: 30px; */
    }

    h2 {
        color: red;
    }
`

const Text = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 3em;
    width: 500px;
`

const Buttons = styled.section`
    display: flex;
    justify-content: space-evenly;
    padding-top: 3em;
    width: 500px;
`

const Delete = styled.button`
    background: none;
    border-radius: 10px;
    width: 100px;
    border: none;
    color: white;
    background-color: red;

    &:hover{
        color: red;
        background-color: white;
        transition: 0.4s;
    }
`

const Cancel = styled.button`
    background: none;
    border-radius: 10px;
    width: 100px;
    border: none;
    color: white;
    background-color: green;

    &:hover{
        color: green;
        background-color: white;
        transition: 0.4s;
    }
`

export default {
    Modal,
    Text,
    Buttons,
    Delete,
    Cancel
}