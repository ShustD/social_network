import React from "react"
import { Paginator } from "../../common/Paginator/Paginator"
import { UserItem } from "./UserItem/UserItem"


export const Users = (props) => {
       
        return (
            <div>
                <Paginator {...props} />
                    
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


