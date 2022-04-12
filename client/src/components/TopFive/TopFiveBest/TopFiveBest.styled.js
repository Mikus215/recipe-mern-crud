import styled from 'styled-components'

export const TopFiveBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-radius: 1rem;
    background-color: #F6F6F6;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    border-radius: 1rem;
    img{
       width: 100%;
       border-top-left-radius: 1rem;
       border-top-right-radius: 1rem;
    }
    @media(min-width: 1250px){
        width: 20%;
    }
`