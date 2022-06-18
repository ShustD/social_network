import React from 'react'
import { DialogsItem } from './DialogItems/DialogItems'
import d from './Dialogs.module.css'
import { Message } from './Message/Message'

export const Dialogs = (props) => {
   
    const onAddDialog = () => {
        props.addDialog()
    }
    const onChangeText = (e) => {
        const text = e.target.value
        props.changeDialog(text)
    }
    let dialogElements = props.state.dialogs.map((d, index) => <DialogsItem key={'dialog' + index} name={d.name} id={d.id} />)

    let messageElements = props.state.messages.map((m, index) => <Message key={'message' + index} text={m.text} />)
    
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                {dialogElements}
            </div>
            <div className={d.messages}>
                {messageElements}
                <div className={d.messageText}>
                    <textarea onChange={onChangeText} value={props.state.newDialogMessage} ></textarea>
                </div>
                <div>
                    <button onClick={onAddDialog}>Send</button>
                </div>
            </div>
        </div>
    )
}
