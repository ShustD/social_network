import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addDialog } from '../../redux/dialogsReducer'
import { Dialogs } from './Dialogs'

const mapState = (state) => {
    return {
        state: state.dialogsPage,
    }
}



export const DialogsContainer = compose(connect (mapState, {addDialog}),
    withAuthRedirect
)(Dialogs)

