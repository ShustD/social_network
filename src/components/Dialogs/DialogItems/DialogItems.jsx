import React from 'react'
import { NavLink } from 'react-router-dom'
import d from './../Dialogs.module.css'

export const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={d.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

