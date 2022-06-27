import { applyMiddleware, combineReducers,  legacy_createStore } from "redux"
import { authReducer } from "./authReducer"
import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"
import { usersReducer } from "./usersReducer"
import thunkMiddleware from 'redux-thunk'
import { appReducer } from "./appReducer"


const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
    
})
export const store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware))


window.store = store