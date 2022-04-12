import styled from "styled-components";

export const RatingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    p{
        font-weight: bold;
        margin-bottom: .7rem;
    }
    select,option{
        width: 200px;
        height: 50px;
        font-size: 1.2rem;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media(min-width: 576px){
        flex-direction: row;
    }
`

export const ButtonSubmit = styled.button`
    background: #FFA800;
    width: 200px;
    height: 50px;
    border: none;
    font-size: 1.2rem;
    margin-top: .5rem;
    color: white;
    border-radius: .3rem;
    cursor: pointer;
    margin-left: 0rem;
    @media(min-width: 576px){
        flex-direction: row;
        margin-left: 1rem;
        margin-top: 0;
    }
    
`

export const ErrorMessages = styled.p`
    color: black;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1rem;
`