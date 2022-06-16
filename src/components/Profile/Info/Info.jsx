import React from 'react';
import { Preloader } from '../../../common/Preloader/Preloader';

import p from './Info.module.css'

export const Info = (props) => {
    if(!props.profile) {
        return (<Preloader />)
    }
    return (
        <div>
            <div className={p.infoImg}>
                <img src='http://cnt-design.ru/upload/iblock/6a1/ck_235.jpg' alt=''></img>
            </div>
            <div className={p.item}>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <div className={p.info__about}>
                <div className={p.info__tittle}>About me</div>
                <div className={p.info__text}>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
