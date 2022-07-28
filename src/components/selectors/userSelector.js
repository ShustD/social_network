import { createSelector } from "reselect"

const getUsersFromState = (state) => {
    return state.usersPage.users
}

export const getUsersReselect = createSelector(getUsersFromState, (users) => {
    return users
})
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}

export const getUserCount = (state) => {
    return state.usersPage.usersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowInProgress = (state) => {
    return state.usersPage.followInProgress
}
export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}