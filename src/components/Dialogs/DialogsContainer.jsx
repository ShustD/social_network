import { connect } from 'react-redux'
import { addDialogActionCreator, changeDialogActionCreator } from '../../redux/dialogsReducer'
import { Dialogs } from './Dialogs'

const mapState = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatch = (dispatch) => {
    return {
        addDialog: () => {dispatch(addDialogActionCreator())},
        changeText: (text) => {dispatch(changeDialogActionCreator(text))}
    }
}
export const DialogsContainer = connect (mapState, mapDispatch) (Dialogs)