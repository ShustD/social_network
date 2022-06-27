import { Field, Formik } from 'formik'
import React from 'react'
import { validatorMessages} from '../../Validators/validator'
import { DialogsItem } from './DialogItems/DialogItems'
import d from './Dialogs.module.css'
import { Message } from './Message/Message'

export const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map((d, index) => <DialogsItem key={'dialog' + index} name={d.name} id={d.id} />)

    let messageElements = props.state.messages.map((m, index) => <Message key={'message' + index} text={m.text} />)
    const addNewMessage = (values) => {
        props.addDialog(values.newMessage)
    }
    
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItem}>
                {dialogElements}
            </div>
            <div className={d.messages}>
                {messageElements}
                <Formik initialValues={{ newMessage: '' }}
                    onSubmit={addNewMessage}
                    validationSchema={validatorMessages}>
                    {({ handleSubmit, handleChange, errors, touched }) => (
                        <form onSubmit={handleSubmit} className={d.messageText}>
                            <Field component='input' name='newMessage' 
                            onChange={handleChange} placeholder="Enter your message" />
                             {errors.newMessage && touched.newMessage ? (
                                <div className={d.errors}>{errors.newMessage}</div>
                            ) : null}
                            <div> 
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}


