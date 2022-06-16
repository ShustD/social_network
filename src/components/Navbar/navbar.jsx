import React from 'react';
import { NavLink } from 'react-router-dom';
import { FrendContainer } from './Friends/FriendsContainer';
import n from './navbar.module.css'


export const NavBar = (props) => {
    
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' className={(link) => link.isActive ? n.active : '' }>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' className={(link) => link.isActive ? n.active : '' }>Message</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='users' className={(link) => link.isActive ? n.active: ''}>Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='news' className={(link) => link.isActive ? n.active : '' }>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='music' className={(link) => link.isActive ? n.active : '' }>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='setting' className={(link) => link.isActive ? n.active : '' }>Settings</NavLink>
            </div>
            <FrendContainer />
        </nav>)
}