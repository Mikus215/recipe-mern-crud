import styled from 'styled-components'

export const StyledHome = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
`
export const GeneralTitle = styled.div`
    padding-top: 3rem;
    width: 100%;
    font-weight: bold;
    p{
        margin: 1rem 0rem;
        font-size: 1.4rem;
    }
    button{
        border: none;
        background: #FFA800;
        font-weight: bold;
        font-size: 1.2rem;
        padding: .7rem 1rem;
        cursor: pointer;
        a{
            color: white;
        }
    }
    @media(min-width: 576px){
        padding-top: 6rem;
        width: 40%;
        p{
            font-size: 2rem;
        }
        button{
            font-size: 1rem;
        }
    }
    @media(min-width: 768px){
        padding-top: 10rem;
        width: 40%;
    }
`
export const RightCornerBoxImg = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    img{
        position: absolute;
    }
    img:nth-child(1){
        position: static;
    }
    img:nth-child(2){
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    img:nth-child(2){
        top: 60%;
        left: 50%;
    }
    img:nth-child(3){
        top: 65%;
        left: 60%;
    }
    img:nth-child(4){
        top: 30%;
        left: 6%;
    }
    img:nth-child(5){
        top: 25%;
        left: 35%;
        @media (min-width: 576px) {
            top: 15%;
        }
    }
    img:nth-child(6){
        top: 60%;
        left: 25%;
    }
    img:nth-child(7){
        top: 25%;
        left: 80%;
    }
`

export const LeftCornerBoxImg = styled.div`
    position: absolute;
    left: 0%;
    top: 700px;
    z-index: -1;
    @media (min-width: 576px) {
            top: 700px;
        }
`

export const BestRecipesTitle = styled.div`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 35rem;
`