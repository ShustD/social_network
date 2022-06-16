import React from 'react';
import { Info } from './Info/Info';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


export const Profile = (props) => {

    return (
        <div>
            <Info profile={props.profile}/>
            <MyPostsContainer />
        </div>)
}