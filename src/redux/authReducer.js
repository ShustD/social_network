import { headerApi } from "../api/api"

const SET_AUTH_USER = 'SET_AUTH_USER'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}
export const setAuthUser = (userId, login, email) => ({ type: SET_AUTH_USER, data: {userId, login, email} })

export const getAuthUsers = () => (dispatch) => {
        headerApi.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUser(id, login, email))}
            })}
    

