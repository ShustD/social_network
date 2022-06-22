import * as axios from 'axios'

const instans = axios.create ({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers : {'API-KEY': '3dc34a89-829e-4d3d-92d6-3583bc57102f'}
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

export const profileApi = {
    getProfileInfo (userId) {
        return instans.get(`profile/${userId}`)
        .then(response => response.data)
    },
    getUserStatus (userId) {
        return instans.get(`profile/status/${userId}`)
       
    },
    setUsersStatus (status) {
        return instans.put(`profile/status`, {status})
        .then(response => response.data)
    }
}

export const headerApi = {
    getAuth() {
        return instans.get(`auth/me`)
        .then(response => response.data)

    }
}

