import React, { useEffect, useState } from 'react'
import EditDeleteSingle from './EditDeleteSingle/EditDeleteSingle'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../actions/recipesActions'
import { ContainerEditDelete } from './EditDelete.styled'
import { fetchUserRecipe } from '../../api'

const EditDelete = ({ setFormData, setIsEdit, setIdRecipe }) => {

    const [userRecipes, setUserRecipes] = useState([])

    useEffect(() => {
        const getUserRecipes = async () => {
            const {data} = await fetchUserRecipe()
            setUserRecipes(data)
        }
        getUserRecipes()
    }, [])

    return (
        <ContainerEditDelete>
            {userRecipes.map(recipe => (
                <EditDeleteSingle {...recipe} key={recipe._id} setFormData={setFormData} setIsEdit={setIsEdit} setIdRecipe={setIdRecipe}/>
            ))}
        </ContainerEditDelete>
    );
}

export default EditDelete;