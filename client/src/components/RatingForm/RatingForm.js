import React, { useState } from 'react'
import { RatingBox, ButtonSubmit, StyledForm } from './RatingForm.styled';
import { addRating } from '../../api';
import { ErrorMessages } from './RatingForm.styled';

const RatingForm = ({ id }) => {

    const [rating, setRating] = useState({ rating: 1 })
    const [message, setMessage] = useState(null)

    const handleRating = e => {
        setRating({ rating: parseInt(e.target.value) })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (rating === "") return;
        const postRating = async () => {
            try {
                const { data } = await addRating(rating, id)
                setMessage(data)
                console.log(data);

            } catch (error) {
                setMessage("You have already rated this recipe")
            }
        }
        postRating()
    }

    return (
        <RatingBox>
            {JSON.parse(localStorage.getItem('user')) === null ? (<p>If you would like to rate this recipe, please log in or register</p>) : (
            <>
                <p>If you want, you can rate this recipe</p>
                <StyledForm onSubmit={handleSubmit}>
                    <select onChange={handleRating} value={rating.rating}>
                        <option value="1">Poor</option>
                        <option value="2">Fair</option>
                        <option value="3">Good</option>
                        <option value="4">Very Good</option>
                        <option value="5">Excellent</option>
                    </select>
                    <ButtonSubmit type='submit'>Add a rating</ButtonSubmit>
                </StyledForm>
                <ErrorMessages>
                    {message !== null ? message : ""}
                </ErrorMessages>
            </>
            )}
        </RatingBox>
    );
}

export default RatingForm;