import { AUTH, LOGOUT } from "../constants/authConstants";

export const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('user', JSON.stringify({...action.payload}))
            return {...state, authData: action.payload};
        case LOGOUT:
            localStorage.clear()
            return {...state, authData: null};
        default:
            return state;
    }
}