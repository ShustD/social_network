import { headerApi } from "../api/api"

const SET_AUTH_USER = 'SET_AUTH_USER'
const API_ERROR = 'API_ERROR'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    apiError: null

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        case API_ERROR: {
            return {
                ...state,
                apiError: action.apiError
            }
        }
        default: {
            return state
        }
    }
}
export const setAuthUser = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER, data: {userId, login, email, isAuth} })
export const apiLoginError = (apiError) => ({type: API_ERROR, apiError})

export const getAuthUsers = () => (dispatch) => {
        return headerApi.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUser(id, login, email, true))}
            })}
    
export const login = (email, password, rememberMe) => (dispatch) => {
    headerApi.login(email, password, rememberMe) 
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(getAuthUsers())
            }dispatch(apiLoginError(data.messages))
        })
}

export const logout = () => (dispatch) => {
    headerApi.logout() 
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false))
            }
        })
}
 