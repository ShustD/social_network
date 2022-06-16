import { userApi, userItemApi } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_IN_PROPGRESS = 'TOGGLE_FOLLOW_IN_PROPGRESS'

let initialState = {
    users: [],
    totalCount: 48,
    usersCount: 4,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u, index) => {

                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u, index) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.page }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.pages }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOW_IN_PROPGRESS: {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalCount = (pages) => ({ type: SET_TOTAL_COUNT, pages })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const togglefollowInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOW_IN_PROPGRESS, isFetching, userId })

export const getUsers = (currentPage, usersCount) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userApi.getUser(currentPage, usersCount)
            .then(data => {
                dispatch(setCurrentPage(currentPage))
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowInProgress(true, userId))
        userItemApi.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(togglefollowInProgress(false, userId))
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowInProgress(true, userId))
        userItemApi.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(togglefollowInProgress(false, userId))
            })
    }
}
