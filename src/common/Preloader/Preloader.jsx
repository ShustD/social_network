import React from 'react'
import preloader from '../../assets/images/oval.svg'
import s from './Preloader.module.css'

export const Preloader = (props) => {
    return (<div className={s.preloader}><img src={preloader} alt="" /></div>)
}