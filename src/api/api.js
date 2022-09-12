import * as axios from 'axios'

const instans = axios.create ({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers : {'API-KEY': 'be253dc1-0620-47af-a7c7-0171fffd5a43'}
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
    },
    changePhoto (file) {
        const formData = new FormData()
        formData.append('image', file)
        return instans.put(`profile/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }})
        .then(response => response.data)
    },
    putFormOnServer (value) {
        return instans.put(`profile`, value)
        .then(response => response.data)
    }
}

export const headerApi = {
    getAuth() {
        return instans.get(`auth/me`)
        .then(response => response.data)
    },
    login(email, password, rememberMe, captcha) {
        return instans.post(`auth/login`, {email, password, rememberMe, captcha})
        .then(response=>response.data)
    },
    logout() {
        return instans.delete(`auth/login`)
        .then(response => response.data)
    },
}

export const securityApi = {
    getCaptchaUrl() {
        return instans.get(`security/get-captcha-url`)
        .then(response => response.data)
    }
}
