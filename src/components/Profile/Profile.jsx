import React from 'react';
import { Info } from './Info/Info';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


export const Profile = (props) => {
    
    return (
        <div>
            <Info profile={props.profile} status={props.status} onChangePhoto={props.onChangePhoto}
            updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            <MyPostsContainer />
        </div>)
}