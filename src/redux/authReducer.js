import { headerApi, securityApi } from "../api/api"

const SET_AUTH_USER = 'SET_AUTH_USER'
const API_ERROR = 'API_ERROR'
const GET_CAPTCHA = 'GET_CAPTCHA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    apiError: null,
    captcha: null
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
        case GET_CAPTCHA: {
            return {
              ...state,
              captcha: action.captcha  
            }
        }
        default: {
            return state
        }
    }
}
export const setAuthUser = (userId, login, email, isAuth) => ({ type: SET_AUTH_USER, data: { userId, login, email, isAuth } })
export const apiLoginError = (apiError) => ({ type: API_ERROR, apiError })
export const getCaptchaUrlSuccess = (captcha) => ({ type: GET_CAPTCHA, captcha })

export const getAuthUsers = () => async (dispatch) => {
    const data = await headerApi.getAuth()
                    if (data.resultCode === 0) {
                let { id, login, email } = data.data
                dispatch(setAuthUser(id, login, email, true))
            }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await headerApi.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUsers())
    } else {
        if(data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    } dispatch(apiLoginError(data.messages))
}

export const logout = () => async (dispatch) => {
    const data = await headerApi.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false))
    }
}
const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityApi.getCaptchaUrl()
        const capctchaURL = data.url
        dispatch(getCaptchaUrlSuccess(capctchaURL))
}