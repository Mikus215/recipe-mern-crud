import React from 'react'
import { TitleDish, Description, ReadMoreRatingBox, DetailsButton, BottomInfo } from '../../Recipes/Recipe/Recipe.styled';
import { TopFiveBox } from './TopFiveBest.styled';
import Rating from '../../Rating/Rating'

const Recipe = ({ creator, title, imgUrl, description, budget, calculatedRating, id, typeOfFood }) => {

    const cutDescription = description.substring(0, 150)

    return (
        <TopFiveBox>
            <img src={imgUrl} alt="" />
            <BottomInfo>
                <TitleDish><span>{title}</span><span>{budget}$</span></TitleDish>
                <Description>{cutDescription}</Description>
                <ReadMoreRatingBox><DetailsButton to={`/recipes/${id}`}>Read More</DetailsButton><Rating value={calculatedRating} /></ReadMoreRatingBox>
            </BottomInfo>
        </TopFiveBox>
    );
}

export default Recipe;