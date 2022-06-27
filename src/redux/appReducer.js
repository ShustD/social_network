import { getAuthUsers } from "./authReducer"

const AUTHORIZED_SUCCESS = 'AUTHORIZED_SUCCESS'


let initialState = {
    authorized: false

}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZED_SUCCESS: {
            return {
                ...state,
                authorized: true
            }
        }
        default: {
            return state
        }
    }
}

export const authorizedPage = () => ({type: AUTHORIZED_SUCCESS})

export const authorizedPageThunk = () => (dispatch) => {
    const promise =  dispatch(getAuthUsers())
    
    promise.then(() => dispatch(authorizedPage()))

    
}
    
