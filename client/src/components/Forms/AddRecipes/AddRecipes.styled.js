import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    @media(min-width: 576px){
        flex-direction: row;
        align-items: stretch;
    }
`

export const FormContainer = styled.div`
    margin: 1rem 1rem;
`

export const TitleAddRecipe = styled.h1`
    font-size: 3rem;
    margin: 1rem 0 2rem 0;
    padding-top: 5rem;
`

export const ErrorLogin = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 2rem;
    z-index: -1;
`

export const FirstRowForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    input,textarea{
        font-size: 1rem;
        padding: .3rem;
        max-width: 100%;
        min-width: 100%;
        margin: .3rem 0;
    }
    label{
        margin: .3rem 0;
    }
`

export const SecondRowSingle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-size: 1.2;
    font-weight: bold;
    input,select{
        font-size: 1rem;
        padding: .3rem;
    }
`

export const SecondRowSingleBox = styled.div`
    display: flex;
    margin-top: .3rem;
    gap: 1rem;
    label{
        margin: .3rem 0;
    }
`

export const LeftFormItems = styled.div`
    width: 70%;
`

export const RightFormItems = styled.div`
    margin: 1rem 0;
    position: relative;
    width: 30%;
    label{
        position: relative;
        z-index: -1;
        width: 100%;
        height: 100px;
        background: none;
        cursor: pointer;
        img{
            width: 100px;
            height: 100px;
            border: 1px solid #D9D9D9;
            padding: 1rem 1rem 1.2rem 1.2rem;
            border-radius: .3rem;
        }
        @media(min-width: 576px){
            margin-left: 10%;
        }
    }
    input[type="file"]{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
        cursor: pointer;
    }   
`

export const ButtonSubmit = styled.button`
    background: #124C5F;
    width: 200px;
    height: 50px;
    border: none;
    font-size: 1.2rem;
    margin-top: .5rem;
    color: white;
    border-radius: .3rem;
    cursor: pointer;
`

export const StopEdit = styled.button`
    background: #FFA800;
    width: 200px;
    height: 50px;
    border: none;
    font-size: 1.2rem;
    margin-top: .5rem;
    color: white;
    border-radius: .3rem;
    cursor: pointer;
    @media(min-width: 576px){
        margin-left: 1rem;
    }
`