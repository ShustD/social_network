import React from 'react';
import { FriendItem } from './Frienditem/FriendItem';
import s from './Friends.module.css'

export const Friends = (props) => {

    let friendElement = props.state.map((d, index) => <FriendItem key={'friend' + index} name={d.name} />)
    return (
        <div className={s.friends}>
            <div className={s.friends__tittle}>
                FRIENDS
            </div>
            <div className={s.friends__item}>
                {friendElement}
            </div>
        </div>
    )
}