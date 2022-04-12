import styled from "styled-components"

export const FormContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 .3rem;
    h1{
        text-align: center;
    }
`

export const FormButton = styled.button`
    width: 100%;
    padding: 0.7rem;
    background-color: #124C5F;
    border: none;
    border-radius: .3rem;
    color: white;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`

export const FormBox = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    input{
        border: 1px solid #D9D9D9;
        outline: none;
        width: 100%;
    }
    @media(min-width: 576px){
        flex-direction: row;
    }
`

export const FormHaveAccount = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    font-size: 1.2rem;
    text-align: center;
    @media(min-width: 576px){
        flex-direction: row;
    }
    button{
        background: none;
        border: none;
        font-size: 1.2rem;
        margin-top: .5rem;
        color: #FFA800;
        cursor: pointer;
        @media(min-width: 576px){
        margin-top: 0;
        margin-left: .3rem;
    }
    }
`
export const ErrorMessages = styled.p`
    color: red;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1rem;
`