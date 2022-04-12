import React from 'react'
import { StyledBox, TitleDish, Description, ReadMoreRatingBox, DetailsButton, BottomInfo } from './Recipe.styled';
import Rating from '../../Rating/Rating'

const Recipe = ({ creator, title, imgUrl, description, budget, calculatedRating, id, typeOfFood }) => {

    const cutDescription = description.substring(0, 150)

    return (
        <StyledBox>
            <img src={imgUrl} alt="" />
            <BottomInfo>
                <TitleDish><span>{title}</span><span>{budget}$</span></TitleDish>
                <Description>{cutDescription}</Description>
                <ReadMoreRatingBox><DetailsButton to={`/recipes/${id}`}>Read More</DetailsButton><Rating value={calculatedRating}/></ReadMoreRatingBox>
            </BottomInfo>
        </StyledBox>
    );
}

export default Recipe;