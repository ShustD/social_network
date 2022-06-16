import React from 'react';
import s from './FriendItem.module.css'

export const FriendItem = (props) => {
    return (
        
        <div>
            <div className={s.item__ava}>
            <img src='https://avatars.mds.yandex.net/i?id=a31f8e27c213f83905e1742b49b156ea-4809613-images-thumbs&n=13' alt='' />
            </div>
            <div className={s.item__name}>
                {props.name}
            </div>
        </div>
    )
}