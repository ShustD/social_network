import React from "react"
import { UserItem } from "./UserItem/UserItem"
import s from './Users.module.css'

export const Users = (props) => {
    
    const pagesCount = Math.ceil(props.totalCount / props.usersCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {   // i <= pagesCount
        if (i <= 30) {  //page is very long
            pages.push(i)
        }
    }    
        return (
            <div>
                <div className={s.select__page}>
                    {pages.map((p, index) => {
                        return <a href="#page" key={'p' + index} className={props.currentPage === p ? s.selected : s.unselected}
                            onClick={() => { props.onChangePage(p) }} >{p}</a>
                    })}
                </div>
                <div>
                    {props.state.map((p, index) =>
                            <UserItem key={'user' + index} name={p.name}
                                followed={p.followed} status={p.status} 
                                id={p.id} logo={p.photos} 
                                followInProgress={props.followInProgress} 
                                follow={props.follow}
                                unfollow={props.unfollow}/>)}
                </div>
            </div >
        )
}


