const addDialog = 'ADD-DIALOG'
const changeDialog = 'CHANGE-DIALOG'

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
        case addDialog: {
            let sms = state.newDialogMessage
            return { ...state,
            messages: [...state.messages, { id: '4', text: sms }],
            newDialogMessage: ''}
        }
        case changeDialog: {
            return {...state,
            newDialogMessage: action.newText}
        }
            
        default:
            return state
    }


}
export const addDialogActionCreator = () => ({ type: addDialog })
export const changeDialogActionCreator = (text) => ({ type: changeDialog, newText: text })