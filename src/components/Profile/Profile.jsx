import React from 'react';
import { Info } from './Info/Info';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


export const Profile = (props) => {
    
    return (
        <div>
            <Info profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>)
}