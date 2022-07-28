import React, {useState} from "react"
import s from './Paginator.module.css'

export const Paginator = (props) => {
    
    const pagesCount = Math.ceil(props.totalCount / props.usersCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {   
        pages.push(i)
        }
    
    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPages = (portionNumber - 1) * props.portionSize + 1 
    let rightPortionPages = portionNumber * props.portionSize
       

    return (
        <div className={s.select__page}>
            {portionNumber > 1 && 
            <button onClick={() => setPortionNumber(portionNumber -1)}>PREV</button>}
            {pages
            .filter(p => p >= leftPortionPages && p <= rightPortionPages)
            .map((p, index) => {
                return <a href="#page" key={'p' + index} className={props.currentPage === p ? s.selected : s.unselected}
                    onClick={() => { props.onChangePage(p) }} >{p}</a>
            })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
           
        </div>

    )
}


