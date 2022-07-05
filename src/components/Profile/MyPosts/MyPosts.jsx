import { Field, Formik } from 'formik';
import React from 'react';
import { validatorPost } from '../../../Validators/validator';
import p from './MyPosts.module.css'
import { Post } from './Post/Post';

export let MyPosts = (props) => {
    
 
    let postElements = props.state.posts.map((p, index) => <Post key={'post' + index} mes={p.text} count={p.likesCount} id={index} addLikes={props.addLikes} />)

    const addnewTextPost = (value) => {
        props.addPost(value.newTextPost)
    }

    
    return (
        <div className={p.item}>

            <div className={p.item}>
                <div>NEW POST</div>
                <Formik initialValues={{ newTextPost: '' }}
                    onSubmit={addnewTextPost}
                    validationSchema={validatorPost}>
                    {({ handleSubmit, handleChange, errors, touched }) => (
                        <form onSubmit={handleSubmit} >
                            <Field component='input' name='newTextPost' 
                            className={errors.newTextPost && touched.newTextPost? p.input: ''}
                                onChange={handleChange} placeholder="Enter your message" />
                            {errors.newTextPost && touched.newTextPost ? (
                                <div className={p.errors}>{errors.newTextPost}</div>
                            ) : null}
                            <div>
                                <button type="submit">Add Post</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            <div>
                {postElements}
            </div>
        </div >)
}

MyPosts = React.memo(MyPosts)