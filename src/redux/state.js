import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer"

export let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { text: 'Да здравстует первый пост!', likesCount: '10' },
                { text: 'Второй пост, настало твое время!', likesCount: '15' },],
            newTextMessage: 'BLABLABLA'
        },
    },
    _callSubscriber() {
        console.log('STORE');
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}



