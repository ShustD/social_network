import React from 'react';
import h from './Header.module.css'
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
   
    return (
        <header className={h.header}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=4707672b8fb4a03b34d8e2780edd869f-4012546-images-thumbs&n=13' alt='' />
            </div>
            
            <div className={h.header__link}>
                {props.isAuth === true? <div>
                <div>{props.login}</div><div>{props.email}</div></div>  : 
                <NavLink to='/login'>Login</NavLink>} 
            </div>
        </header>)
}