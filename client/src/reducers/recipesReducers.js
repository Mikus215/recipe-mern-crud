import { GET_RECIPES, POST_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, GET_RECIPES_FILTERS } from '../constants/recipesConstants.js'

export const recipesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_RECIPES:
            return action.payload
        case GET_RECIPES_FILTERS:
            return action.payload
        case POST_RECIPE:
            return [...state, action.payload]
        case DELETE_RECIPE:
            return state.filter(recipe => (recipe._id !== action.payload))
        case UPDATE_RECIPE:
            return state.map(item => (item._id === action.payload._id ? action.payload : item))
        default: return state;
    }
}