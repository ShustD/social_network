import { profileApi } from "../api/api"

const addPost = 'ADD-POST'
const changeMessage = 'CHANGE-MESSAGE'
const addLikes = 'ADD-LIKES'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { text: 'Да здравстует первый пост!', likesCount: 10 },
        { text: 'Второй пост, настало твое время!', likesCount: 15 },],
    newTextMessage: 'BLABLABLA',
    profile: null
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            let post = {
                text: state.newTextMessage,
                likesCount: 0
            }
            return {...state,
            posts: [...state.posts, post],
            newTextMessage: ''}
        }
            
        case changeMessage: {
            return {...state,
            newTextMessage: action.newText}
        }
        case addLikes: {
            const stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts[action.id].likesCount = stateCopy.posts[action.id].likesCount + 1
            
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile }
        }
        default: 
         return state
    }
    
}

export const addPostActionCreator = () => ({ type: addPost })
export const changeMessageActionCreator = (text) => ({ type: changeMessage, newText: text })
export const addLikesActionCreator = (id) => ({type: addLikes, id: id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => (dispatch) => {
        profileApi.getProfileInfo(userId)
        .then(data => {
            dispatch(setUserProfile(data))
            }
        )
    }
    