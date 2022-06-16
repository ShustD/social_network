import React from 'react';
import p from './MyPosts.module.css'
import { Post } from './Post/Post';

export const MyPosts = (props) => {
    
    const onAddPost = () => {
        props.addPost()
    }

    const onChangeText = (e) => {
        const text = e.target.value
        props.changeText(text)
    }
   
    let postElements = props.state.posts.map ((p, index) => <Post key={'post'+index} mes={p.text} count={p.likesCount} id={index} addLikes={props.addLikes}/>)
    
    return (
        <div className={p.item}>

            <div className={p.item}>
                <div>NEW POST</div>
                <textarea onChange={onChangeText} value={props.state.newTextMessage}  />
                <div><button onClick={onAddPost}>Add Post</button></div>
            </div>
            <div>
                {postElements}
            </div>
        </div >)
}