import React, {useState, useEffect} from 'react';
import { Preloader } from '../../../common/Preloader/Preloader';
import p from './Info.module.css'
import { InfoProfileForm } from './InfoProfileForm';
import { InfoStatusWithHooks } from './InfoStatusWithHooks';



export const Info = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [code, setCode] = useState(props.resultCode)
    useEffect( () => {
        setCode(props.resultCode)
    }, [props.resultCode]) 
    console.log(editMode, code);
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
                    
                    {editMode === false && code === 0
                        ? <InfoProfileData goToEditMode={() => setEditMode(true) && setCode(1)} props={props} /> 
                        : <InfoProfileForm props={props} exitEditMode={() => setEditMode(false)} /> }
                                       
                </div>

                <div className={p.info__about}>
                    <InfoStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </div>
    )
}
 const Contacts = ({contactTittle, contactValue}) => {
    return (
        <div>{contactTittle}: {contactValue}</div>
    )

 }

 const InfoProfileData = ({props, goToEditMode}) => {
        
     return (
         <div className={p.info__about}>
                         <div className={p.info__tittle}>About me</div>
                         <div>{props.profile.aboutMe}</div>
                         <div><b>FullName:</b> <span>{props.profile.fullName}</span> </div>
                         <div><b>Contacts:</b>{Object.keys(props.profile.contacts).map((p, key) => 
                                                 <Contacts key={`${key}contatct`} contactTittle={p} contactValue={props.profile.contacts[p]}/>)} </div>
                         <div><b>Looking for a job: </b>{props.profile.lookingForAJob ? `yes ${props.profile.lookingForAJobDescription}` : ' no'}</div>
                        {!props.isOwner && <div><button onClick={goToEditMode}>Change profile INFO</button></div>}
                    </div>
     )
 }

 