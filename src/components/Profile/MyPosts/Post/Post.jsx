import React from 'react';
import p from './Post.module.css'

export const Post = (props) => {

    const onAddLikes = () => {
        const id = props.id
        props.addLikes(id)
    }

    return (
        <div className={p.item}>
            <img src='https://avatars.mds.yandex.net/i?id=a31f8e27c213f83905e1742b49b156ea-4809613-images-thumbs&n=13' alt='' />
            {props.mes}
            <div>
                <button onClick={onAddLikes}>Like {props.count}</button>

            </div>
        </div>
    )
}
