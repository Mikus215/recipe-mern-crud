import React, { useEffect, useState } from 'react'
import InputAddRecipe from '../InputAddRecipe/InputAddRecipe';
import EditDelete from '../../EditAndDeleteRecipes/EditDelete';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { postRecipe, updateRecipe } from '../../../actions/recipesActions';
import { TitleAddRecipe, ErrorLogin, FirstRowForm, FormContainer, SecondRowSingle, SecondRowSingleBox, StyledForm, LeftFormItems, RightFormItems, ButtonSubmit, StopEdit } from './AddRecipes.styled';
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorMessages } from '../Auth/FormAuth.styled';
import imgForm from '../../../img/form-img.png'

const Form = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigation = useNavigate()
    const [isEdit, setIsEdit] = useState(false)
    const [idRecipe, setIdRecipe] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [formData, setFormData] = useState({
        creator: '',
        title: '',
        imgUrl: '',
        description: '',
        typeOfFood: '',
        budget: '',
    })

    const handleInputsChange = e => {
        setFormData(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const clearFormData = () => {
        setFormData({
            title: '',
            imgUrl: '',
            description: '',
            typeOfFood: '',
            budget: ''
        })
    }

    const stopEdit = () => {
        setIsEdit(false)
        clearFormData()
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (formData.creator === '' || formData.title === '' || formData.imgUrl === '' || formData.description === '' || formData.budget === '' || formData.typeOfFood === '') return setErrorMessage("Please fill in all fields")
        setErrorMessage("");
        if(isEdit){
            dispatch(updateRecipe(idRecipe,formData))
        } else{
            dispatch(postRecipe(formData))
        }
        clearFormData()
        navigation('/recipes')
    }

    useEffect(() => {
        const user = (JSON.parse(localStorage.getItem('user')));
        if (user === null) return;
        setFormData(prevState => ({
            ...prevState, creator: user.userName
        }))
    }, [location])

    return (
        <>
            <FormContainer>
                {JSON.parse(localStorage.getItem('user')) === null ? (<ErrorLogin>Please Login or Register Before Create Recipe</ErrorLogin>) : (
                    <>
                        <TitleAddRecipe>Add a New recipe</TitleAddRecipe>

                        <StyledForm onSubmit={handleSubmit}>
                            <LeftFormItems>
                                <FirstRowForm>
                                    <InputAddRecipe type='text' name='title' value={formData.title} id='Title' handleInputsChange={handleInputsChange} />
                                </FirstRowForm>
                                <FirstRowForm>
                                    <label htmlFor="Description, how to prepare">Description, how to prepare</label>
                                    <textarea name='description' id="Description, how to prepare" onChange={handleInputsChange} value={formData.description}></textarea>
                                </FirstRowForm>
                                <SecondRowSingleBox>
                                    <SecondRowSingle>
                                        <label htmlFor="typeOfFood">Type of Food</label>
                                        <select name="typeOfFood" id="typeOfFood" onChange={handleInputsChange} value={formData.typeOfFood}>
                                            <option defaultValue="Type of Food">Type of Food</option>
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Lunch">Lunch</option>
                                            <option value="Dinner">Dinner</option>
                                            <option value="Snack">Snack</option>
                                        </select>
                                    </SecondRowSingle>
                                    <SecondRowSingle>
                                        <InputAddRecipe type='number' name='budget' value={formData.budget} id='Budget' handleInputsChange={handleInputsChange} />
                                    </SecondRowSingle>
                                </SecondRowSingleBox>
                            </LeftFormItems>
                            <RightFormItems>
                                <FileBase id="img" value={formData.imgUrl} type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, imgUrl: base64 })} />
                                <label htmlFor="img">
                                    <img src={imgForm} alt="" />
                                </label>
                            </RightFormItems>

                            <ButtonSubmit type='submit'>{isEdit ? "Update" : "Add"} Now</ButtonSubmit> {isEdit ? (<StopEdit onClick={stopEdit}>Stop Editing</StopEdit>) : ""}
                        </StyledForm>
                        <ErrorMessages>
                            {errorMessage}
                        </ErrorMessages>
                    </>
                )}
            </FormContainer>
            <EditDelete setFormData={setFormData} setIsEdit={setIsEdit} setIdRecipe={setIdRecipe}/>
        </>
    );
}

export default Form;