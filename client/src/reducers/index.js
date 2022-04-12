import { combineReducers } from "redux";
import { recipesReducer } from './recipesReducers.js'
import { authReducer } from './userReducers.js'

export const reducers = combineReducers({ recipes: recipesReducer, user: authReducer})