import React from 'react';
import { useState } from 'react';
import p from './Info.module.css'

export const InfoStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    
    const activeEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        }

    return (
        <div>
            <div className={p.info__about}>

                <div className={p.info__tittle}>Status</div>
                {!editMode &&
                    <div onDoubleClick={activeEditMode} className={p.info__text}>
                        {props.status || 'put your st'}</div>}
                {editMode &&
                    <input onChange={onStatusChange} onBlur={deActiveEditMode} 
                    value={status} autoFocus={true} className={p.info__text} />}
            </div>
        </div>
    )
}
