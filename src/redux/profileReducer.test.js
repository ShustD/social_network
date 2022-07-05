import { addPostActionCreator, deletePostActionCreator, profileReducer } from "./profileReducer";
import React from 'react'

let state = {
    posts: [
        { postId: 0, text: 'Да здравстует первый пост!', likesCount: 10 },
        { postId: 1, text: 'Второй пост, настало твое время!', likesCount: 15 },]
}

it('Length should be incremented', () => {
    const action = addPostActionCreator('Tests post')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it('likesCount should be 0', () => {
    const action = addPostActionCreator('Tests post')

    const newState = profileReducer(state, action)

    expect(newState.posts[2].likesCount).toBe(0)
})

it('Text of post should be correct', () => {
    const action = addPostActionCreator('Tests post')

    const newState = profileReducer(state, action)

    expect(newState.posts[2].text).toBe('Tests post')
})

it('After delete length of posts should be decrement', () => {
    const action = deletePostActionCreator(0)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})

it(`After delete length of posts shouldn't be changed if postId is incorrect`, () => {
    const action = deletePostActionCreator(10)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})
