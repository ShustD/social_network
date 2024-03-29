import { profileApi } from "../api/api"

const addPost = 'ADD-POST'
const addLikes = 'ADD-LIKES'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const USER_PHOTO = 'USER_PHOTO'
const API_ERROR = 'API_ERROR'
const RESULT_CODE = 'RESULT_CODE'

let initialState = {
    posts: [
        { postId: 0, text: 'Да здравстует первый пост!', likesCount: 10 },
        { postId: 1, text: 'Второй пост, настало твое время!', likesCount: 15 },],
    newTextMessage: 'BLABLABLA',
    profile: null,
    userStatus: '',
    apiError: undefined,
    resultCode: 0
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let post = {
                text: action.newTextPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, post],
            }
        }

        case addLikes: {
            const stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts[action.id].likesCount = stateCopy.posts[action.id].likesCount + 1

            return stateCopy
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                userStatus: action.userStatus
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter( p => p.postId !== action.postId)
            }
        }
        case USER_PHOTO: {
            return { ...state, 
                profile: {...state.profile, photos: action.file}
            }
        }
        case API_ERROR: {
            return { ...state, 
                apiError: action.apiError
            }
        }
        case RESULT_CODE: {
            return { ...state, 
                resultCode: action.resultCode
            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = (newTextPost) => ({ type: addPost, newTextPost })
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId })
export const addLikesActionCreator = (id) => ({ type: addLikes, id: id })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus })
export const userPhoto = (file) => ({ type: USER_PHOTO, file })
export const apiError = (apiError) => ({ type: API_ERROR, apiError })
export const resultCode = (resultCode) => ({ type: RESULT_CODE, resultCode })

export const getProfile = (userId) => async (dispatch) => {
   const data = await profileApi.getProfileInfo(userId)
        dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileApi.getUserStatus(userId)
       dispatch(setUserStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileApi.setUsersStatus(status)
        if(data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        }
export const onChangePhoto = (file) => async (dispatch) => {
    const data = await profileApi.changePhoto(file)
        if(data.resultCode === 0) {
                dispatch(userPhoto(data.data.photos))
            }
}

export const putFormOnServer = (value) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileApi.putFormOnServer(value)
    dispatch(resultCode(data.resultCode))
    if(data.resultCode === 0) {
        dispatch(getProfile(userId)) 
            } dispatch(apiError(data.messages[0]))
}
