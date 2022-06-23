import { applyMiddleware, combineReducers,  legacy_createStore } from "redux"
import { authReducer } from "./authReducer"
import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"
import { usersReducer } from "./usersReducer"
import thunkMiddleware from 'redux-thunk'


const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    
})
export const store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware))


window.store = store