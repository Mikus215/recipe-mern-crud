import { AUTH, LOGOUT } from '../constants/authConstants.js'

import * as api from '../api/index.js'

export const createUser = (user, navigation) => async (dispatch) => {
    const { data } = await api.postUser(user)
    try {

        dispatch({
            type: AUTH,
            payload: data
        })

        navigation("/")

    } catch (error) {
        console.log(error.message);
    }
}

export const loginUser = (user, navigation) => async (dispatch) => {
    const { data } = await api.loginUser(user);

    try {

        dispatch({
            type: AUTH,
            payload: data
        })

        navigation("/")

    } catch (error) {
        console.log(error.message);
    }
}

export const logoutUser = (navigation) => async (dispatch) => {
    await api.logoutUser();

    try {
        
        dispatch({
            type: LOGOUT
        })

        navigation("/")
    } catch (error) {
        console.log(error.message);
    }
}
