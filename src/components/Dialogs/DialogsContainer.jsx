import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addDialogActionCreator, changeDialogActionCreator } from '../../redux/dialogsReducer'
import { Dialogs } from './Dialogs'

const mapState = (state) => {
    return {
        state: state.dialogsPage,
    }
}

const mapDispatch = (dispatch) => {
    return {
        addDialog: () => {dispatch(addDialogActionCreator())},
        changeText: (text) => {dispatch(changeDialogActionCreator(text))}
    }
}
 const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect (mapState, mapDispatch) (AuthRedirectComponent)