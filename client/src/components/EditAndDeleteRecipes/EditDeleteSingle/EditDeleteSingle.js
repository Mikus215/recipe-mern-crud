import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../../../actions/recipesActions';
import {useNavigate} from 'react-router-dom'
import { Img, EditDeleteItem, EditButton, DeleteButton, TitleRecipe } from './EditDeleteSingle.styled';

const EditDeleteSingle = ({ title, imgUrl, description, typeOfFood, _id, budget, setFormData, setIsEdit, setIdRecipe }) => {

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteRecipe(_id))
        navigation("/recipes")
    }

    const handleFillForm = () => {
        setFormData({
            title: title,
            imgUrl: imgUrl,
            description: description,
            typeOfFood: typeOfFood,
            budget: budget
        })
        setIsEdit(true)
        setIdRecipe(_id)
    }

    return (
        <EditDeleteItem>
            <Img src={`https://recipes-food-project.herokuapp.com/${imgUrl}`} alt=""></Img>
            <TitleRecipe>{title}</TitleRecipe>
            <EditButton onClick={handleFillForm}>Edit</EditButton>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </EditDeleteItem>
    );
}

export default EditDeleteSingle;