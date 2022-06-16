import React from 'react'
import d from './../Dialogs.module.css'



export const Message = (props) => {
    return (
        <div className={d.message}>{props.text}</div>
    )
}

