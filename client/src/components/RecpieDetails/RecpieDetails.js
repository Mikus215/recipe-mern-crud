import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerDetails, Creator, CreatorRatingBox, DescriptionHowToPrepare, ImgDetailsMeal, LeftBackground, LeftBox, RatingStars, MobileTitle, RightBox, TitleDesktop, RightBackground, RatingBox } from './RecpieDetails.styled'
import { fetchRecipe } from '../../api'
import leftBackground from '../../img/left-background.png'
import RatingForm from '../RatingForm/RatingForm'
import Rating from '../Rating/Rating'

const RecpieDetails = () => {

    const { id } = useParams()
    const [meal, setMeal] = useState([])

    useEffect(() => {
        const getDetailsData = async () => {
            const { data } = await fetchRecipe(id)
            setMeal(data)
        }
        getDetailsData()
    }, [])

    return (
        <ContainerDetails>
            <LeftBackground src={leftBackground}></LeftBackground>
            <LeftBox>
                <MobileTitle>{meal.title}</MobileTitle>
                <ImgDetailsMeal src={`https://recipes-food-project.herokuapp.com/${imgUrl}`} alt={meal.title}></ImgDetailsMeal>
                <CreatorRatingBox>
                    <Creator>Created by: {meal.creator}</Creator>
                    <Rating value={meal.calculatedRating}/>
                </CreatorRatingBox>
            </LeftBox>
            <RightBox>
                <TitleDesktop>{meal.title}</TitleDesktop>
                <h3>Type of food: #{meal.typeOfFood}</h3>
                <h2>How to prepare:</h2>
                <DescriptionHowToPrepare>
                    <p>{meal.description}</p>
                </DescriptionHowToPrepare>
                <RatingForm id={meal._id}/>
            </RightBox>
        </ContainerDetails>
    );
}

export default RecpieDetails;