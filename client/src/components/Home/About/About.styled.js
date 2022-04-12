import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    @media(min-width: 576px){
        flex-direction: row;
        justify-content: space-around;
    }
`
export const ImgChief = styled.div`
    width: 80%;
    img{
        width: 100%;
        max-width: 500px;
    }
    @media(min-width: 576px){
        width: 50%;
    }
`

export const AboutText = styled.div`
    width: 90%;
    max-width: 500px;
    @media(min-width: 576px){
        width: 50%;
    }
    p:nth-child(3){
        margin-bottom: 1rem;
    }
    p:nth-child(2){
        margin-top: 1rem;
    }
    p{
        line-height: 150%;
        @media(min-width: 576px){
            margin-bottom: 0;
        }
    }
`