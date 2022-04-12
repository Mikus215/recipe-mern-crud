import axios from 'axios'

axios.defaults.withCredentials = true

const API = axios.create({ baseURL: 'https://recipes-food-project.herokuapp.com' })

export const fetchRecipes= () => API.get('/recipes', {withCredentials: true});
export const fetchRecipe = id => API.get(`/recipes/details/${id}`, { withCredentials: true });
export const fetchUserRecipe = () => API.get('/recipes/userRecipes', { withCredentials: true });
export const fetchTopFive = () => API.get('/recipes/topFive', { withCredentials: true });
export const fetchFiltersRecipes = recipe => API.get(`/recipes/type/${recipe}`, { withCredentials: true });
export const logoutUser = () => API.get('/user/logout', { withCredentials: true })
export const postRecipes = recipe => API.post('/recipes', recipe, {withCredentials: true})
export const postUser = user => API.post('/user/register', user, {withCredentials: true})
export const loginUser = user => API.post('/user/login', user, { withCredentials: true })
export const deleteRecipe = id => API.delete(`/recipes/${id}`, {withCredentials: true})
export const updateRecipe = (id, updatedRecipe) => API.patch(`/recipes/${id}`, updatedRecipe, { withCredentials: true })
export const addRating = (rating, id) => API.patch(`/recipes/rating/${id}`, rating, { withCredentials: true })
