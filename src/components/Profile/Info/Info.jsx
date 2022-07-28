import React from 'react';
import { Preloader } from '../../../common/Preloader/Preloader';

import p from './Info.module.css'

import { InfoStatusWithHooks } from './InfoStatusWithHooks';

export const Info = (props) => {
    if (!props.profile) {
        return (<Preloader />)
    }
    const selectPhoto =  (e) => {
        props.onChangePhoto(e.target.files[0])
    }
    return (
        <div>
            <div className={p.info__content}>
                <div>
                    <div className={p.item}>
                        <img src={props.profile.photos.large || 'https://avatars.mds.yandex.net/get-zen_doc/245342/pub_5b46f9e0c2be9800a82363df_5b4725c645515100a9e1ccb9/scale_1200'} alt="" />
                    </div>
                    {!props.isOwner &&  <div className={p.input__file}><input type="file" onChange={selectPhoto}/></div>}
                    
                    <div className={p.info__about}>
                        <div className={p.info__tittle}>About me</div>
                        <div>{props.profile.aboutMe}</div>
                    </div>
                </div>

                <div className={p.info__about}>
                    <InfoStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </div>
    )
}
