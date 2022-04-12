import { GET_RECIPES, POST_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, GET_RECIPES_FILTERS } from '../constants/recipesConstants.js'

import * as api from '../api/index.js'

export const getRecipes = () => async (dispatch) => {
    const { data } = await api.fetchRecipes()
    try {

        dispatch({
            type: GET_RECIPES,
            payload: data
        })

    } catch (error) {
        console.log(error.message);
    }
}

export const getRecipesFilters = typeFood => async (dispatch) => {
    const { data } = await api.fetchFiltersRecipes(typeFood)
    try {

        dispatch({
            type: GET_RECIPES_FILTERS,
            payload: data
        })

    } catch (error) {
        console.log(error.message);
    }
}

export const postRecipe = recipe => async (dispatch) => {
    const { data } = await api.postRecipes(recipe)

    try {

        dispatch({
            type: POST_RECIPE,
            payload: data
        })
        
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteRecipe = id => async (dispatch) => {

    const { data } = await api.deleteRecipe(id)

    try {
        
        dispatch({
            type: DELETE_RECIPE,
            payload: id
        })
        
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRecipe = (id, updatedRecipe) => async (dispatch) => {

    const { data } = await api.updateRecipe(id, updatedRecipe)

    try {
        
        dispatch({
            type: UPDATE_RECIPE,
            payload: data
        })
        
    } catch (error) {
        console.log(error.message);
    }
}