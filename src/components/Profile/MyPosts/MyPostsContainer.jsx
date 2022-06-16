import { connect } from 'react-redux';
import { addLikesActionCreator, addPostActionCreator, changeMessageActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';

const mapState = (state) => {
    return {
        state: state.profilePage
    }
}
const mapDispatch = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())} ,
        changeText: (text) => {dispatch(changeMessageActionCreator(text))} ,
        addLikes: (id) => {dispatch(addLikesActionCreator(id))}
    }
}
export const MyPostsContainer  = connect(mapState, mapDispatch)(MyPosts)