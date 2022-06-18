const ADD_DIALOG = 'ADD_DIALOG'
const CHANGE_DIALOG = 'CHANGE_DIALOG'

const initialState = {
    dialogs: [
        { id: '1', name: 'Nikita' },
        { id: '2', name: 'Stas' },
        { id: '3', name: 'Gena' },
        { id: '4', name: 'Lena' },
        { id: '5', name: 'Vika' },],

    messages: [
        { id: '1', text: 'Hi' },
        { id: '2', text: 'How are you?' },
        { id: '3', text: 'How is your PROJECT?' },],
    newDialogMessage: 'Change ME!'
}
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG: {
            let sms = state.newDialogMessage
            return { ...state,
            messages: [...state.messages, { id: '4', text: sms }],
            newDialogMessage: ''}
        }
        case CHANGE_DIALOG: {
            return {...state,
            newDialogMessage: action.newText}
        }
            
        default:
            return state
    }


}
export const addDialog = () => ({ type: ADD_DIALOG })
export const changeDialog = (text) => ({ type: CHANGE_DIALOG, newText: text })