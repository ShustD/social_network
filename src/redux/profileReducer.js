import { profileApi } from "../api/api"

const addPost = 'ADD-POST'
const addLikes = 'ADD-LIKES'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        { text: 'Да здравстует первый пост!', likesCount: 10 },
        { text: 'Второй пост, настало твое время!', likesCount: 15 },],
    newTextMessage: 'BLABLABLA',
    profile: null,
    userStatus: ''
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
        default:
            return state
    }

}

export const addPostActionCreator = (newTextPost) => ({ type: addPost, newTextPost })
export const addLikesActionCreator = (id) => ({ type: addLikes, id: id })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus })

export const getProfile = (userId) => (dispatch) => {
    profileApi.getProfileInfo(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileApi.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileApi.setUsersStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
            
        })
}