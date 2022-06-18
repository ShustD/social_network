import React from 'react';
import { Preloader } from '../../../common/Preloader/Preloader';

import p from './Info.module.css'
import { InfoStatus } from './InfoStatus';

export const Info = (props) => {
    if (!props.profile) {
        return (<Preloader />)
    }
    return (
        <div>
            <div className={p.info__content}>
                <div className={p.item}>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div className={p.info__about}>
                    <InfoStatus profile={props.profile}/>
                </div>
            </div>
        </div>
    )
}
