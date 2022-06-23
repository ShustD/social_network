import { connect } from 'react-redux';
import { addLikesActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';

const mapState = (state) => {
    return {
        state: state.profilePage
    }
}
const mapDispatch = (dispatch) => {
    return {
        addPost: (newTextPost) => {dispatch(addPostActionCreator(newTextPost))} ,
        addLikes: (id) => {dispatch(addLikesActionCreator(id))}
    }
}
export const MyPostsContainer  = connect(mapState, mapDispatch)(MyPosts)