import { connect } from 'react-redux';
import { Friends } from './Friends';


const mapState = (state) => {
    return {
        state: state.dialogsPage.dialogs
    }
}
 export const FrendContainer = connect (mapState, null) (Friends)

