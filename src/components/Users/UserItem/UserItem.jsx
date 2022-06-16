import React from "react"
import s from './UserItem.module.css'
import UserLogo from '../../../assets/images/UserLogo.png'
import { NavLink } from "react-router-dom"


export const UserItem = (props) => {
    
    const userId = props.id
    const path = '/profile/' + userId
    return (
        <div>
            <div className={s.item__body}>
                <div>
                    <NavLink className={s.item__link} to={path}>
                        <div className={s.item__div__img}>
                            <img className={s.item__img} src={props.logo.small === null 
                                ? UserLogo : props.logo.small} alt="" />
                        </div>
                    </NavLink>
                    <div> {
                        props.followed ?
                            <button disabled={props.followInProgress.some(id => id === userId)} 
                            className={s.item__button} onClick={() => { 
                                props.follow(userId)}}>unfollow</button>
                            : <button disabled={props.followInProgress.some(id => id === userId)} 
                            className={s.item__button} onClick={() => {props.unfollow(userId)
                                }}>follow</button>}
                    </div>
                </div>
                <NavLink className={s.item__link} to={path}>
                    <div className={s.item__content}>
                        <div>
                            <div>{props.name}</div>
                            <div>{'Статус'}</div>
                        </div>
                        <div>
                            <div>{'City'}</div>
                            <div>{'Country'}</div>
                        </div>
                    </div>
                </NavLink>
            </div>

        </div>
    )
}