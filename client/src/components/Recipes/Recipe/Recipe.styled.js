import styled from 'styled-components'
import {Link} from  'react-router-dom'

export const StyledBox = styled.div`
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
    @media(min-width: 576px){
        width: 45%;
    }
    @media(min-width: 992px){
        width: 20%;
    }
`

export const BottomInfo = styled.div`
    margin: .3rem;
    color: #333333;
`

export const TitleDish = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.4rem;
    margin: 1rem .5rem;
`

export const Description = styled.p`
    margin: .7rem .5rem;
`

export const ReadMoreRatingBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: .7rem .5rem;
`

export const DetailsButton = styled(Link)`
    text-decoration: none;
    padding: .3rem .5rem;
    background-color: #FFA800;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .3rem;
    color: white;
`