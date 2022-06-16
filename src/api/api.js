import * as axios from 'axios'

const instans = axios.create ({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers : {'API-KEY': 'b92ccc3e-b784-4712-bc04-5aa05b60c5e1'}
})

export const userApi = {
    getUser (currentPage = 1, usersCount = 4) {
       return instans.get(`users?page=${currentPage}&count=${usersCount}`)
        .then(response => response.data)
    }
}

export const userItemApi = {
    followUser (userId = 2) {
        return instans.post(`follow/${userId}`)
        .then(response => response.data)
    },
    unFollowUser (userId = 2) {
        return instans.delete(`follow/${userId}`)
        .then(response => response.data)
    },
}

export const headerApi = {
    getAuth() {
        return instans.get(`auth/me`)
        .then(response => response.data)

    }
}

export const profileApi = {
    getProfileInfo (userId = 2) {
        return instans.get(`profile/${userId}`)
        .then(response => response.data)
    }
}