import styled from "styled-components";

export const Img = styled.img`
    width: 100px;
    height: 100px;
`
export const EditDeleteItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    width: 100%;
    @media(min-width: 576px){
        flex-direction: row;
    }
`

export const TitleRecipe = styled.h3`
    max-width: 200px;
    min-width: 200px;
`

export const EditButton = styled.button`
    background-color: #FFA800;
    border: none;
    border-radius: .3rem;
    width: 80px;
    height: 40px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
`

export const DeleteButton = styled.button`
    background-color: red;
    border: none;
    border-radius: .3rem;
    width: 80px;
    height: 40px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
`