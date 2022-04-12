import styled from 'styled-components'

export const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 1rem 0 1rem;
    width: 100%;
    min-height: 100vh;
    @media(min-width: 576px){
        flex-direction: row;
    }
`

export const MobileTitle = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    @media(min-width: 576px){
        display: none;
    }
`

export const LeftBox = styled.div`
    width: 100%;
    @media(min-width: 576px){
        width: 50%;
        max-width: 600px;
    }
`

export const ImgDetailsMeal= styled.img`
    width: 100%;
`

export const CreatorRatingBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

export const Creator = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
`

export const RatingStars = styled.span`

`

export const RightBox = styled.div`
    width: 100%;
    padding-top: 3rem;
    @media(min-width: 576px){
        width: 50%;
        margin-left: auto;
        padding-top: 0;
        h2{
            margin: 1rem 0;
        }
    }
    h3{
        margin: 1rem 0;
    }
`

export const TitleDesktop = styled.h1`
    display: none;
    @media(min-width: 576px){
       display: block;
    }
`

export const DescriptionHowToPrepare = styled.div`
   p{
       line-height: 200%;
   }
` 

export const LeftBackground = styled.img`
    position: absolute;
    left: 0;
    z-index: -1;
    top: 300px;
    @media(min-width: 576px){
        top: 600px;
    }
`