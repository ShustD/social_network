import React from "react"
import s from './Paginator.module.css'

export const Paginator = (props) => {

    const pagesCount = Math.ceil(props.totalCount / props.usersCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {   // i <= pagesCount
        if (i <= 30) {  //page is very long
            pages.push(i)
        }
    }
    return (
        <div className={s.select__page}>
            {pages.map((p, index) => {
                return <a href="#page" key={'p' + index} className={props.currentPage === p ? s.selected : s.unselected}
                    onClick={() => { props.onChangePage(p) }} >{p}</a>
            })}
        </div>

    )
}


